class Book < ApplicationRecord
  validates :title, :authors, :author_id, presence: true

  belongs_to :wishlist,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Wishlist,
    optional: true

  belongs_to :exchange_list,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :ExchangeList,
    optional: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
    # optional: true

  # def self.books_by_wishlist_author
  #   Book.all.where.not(wishlist_id: nil).where.not(author_id: current_user).group_by(&:author_id)
  # end

  # def current_user_wishlist
  #   Book.all.where.not(wishlist_id: nil).where(author_id: current_user)
  # end

  # def books_by_exchange_list_author
  #   Book.all.where.not(exchange_list_id: nil).where.not(author_id: current_user).group_by(&:author_id)
  # end

  # def current_user_exchange_list
  #   Book.all.where.not(wishlist_id: nil).where(author_id: current_user)
  # end

  def self.user_key
    all.group_by(&:user).map do |user, books|
      {
        user: user.username,
        titles: books.map { |book| book.title},

      }
    end
  end

  # def book_usernames
  #   Book.all.map do |book|
  #     book.user.username 
  #   end
  # end

  def self.user_exchange_to_others_wish
    current_user_exchange_list = Book.all.where.not(exchange_list_id: nil).where(author_id: 5).user_key
    books_by_wishlist_author = Book.all.where.not(wishlist_id: nil).where.not(author_id: 5).user_key
    user_exchange_books = current_user_exchange_list[0][:titles] 
    books_by_wishlist_author.map do |lists|
      matches = lists[:titles] & user_exchange_books
        {
          lists[:user] => {
            :wishes => matches
          }
        }
    end
  end

  def self.sorted_user_exchange_to_others_wish
    Book.user_exchange_to_others_wish.sort_by { |hsh| hsh.keys.first }
  end

  def self.user_wishlists_to_others_exchange
    current_user_wishlist = Book.all.where.not(wishlist_id: nil).where(author_id: 5).user_key
    books_by_exchange_list_author = Book.all.where.not(exchange_list_id: nil).where.not(author_id: 5).user_key
    user_wishlist_books = current_user_wishlist[0][:titles] 
    books_by_exchange_list_author.map do |lists|
      matches = lists[:titles] & user_wishlist_books
        {
          lists[:user] => {
            :exchanges => matches
          }
        }
    end
  end

  def self.sorted_user_wish_to_others_exchange
    Book.exchange_list_wishlist_merge.sort_by { |hsh| hsh.keys.first }
  end

  # def self.exchange_list_to_wishlist_diff
  #   others_exchange_books = (Book.sorted_user_wish_to_others_exchange - Book.sorted_user_exchange_to_others_wish)
  #   others_wishlist_books = (Book.sorted_user_exchange_to_others_wish - Book.sorted_user_wish_to_others_exchange)
  #   {
  #     :exchange_books => others_exchange_books,
  #     :others_wishlist_books => others_wishlist_books
  #   }
  # end

  def self.exchange_list_wishlist_merge
    others_exchange_books = Book.user_wishlists_to_others_exchange
    others_wishlist_books = Book.user_exchange_to_others_wish
    # others_exchange_books.map do |exchange_list|
    #   others_wishlist_books.map do |wishlist|
    #     exchange_list.merge(wishlist)
    #   end
    # end
    combined_wish_and_exchange = others_exchange_books + others_wishlist_books
    combined_wish_and_exchange.flat_map(&:entries)
      .group_by(&:first)
      .map{|k,v| Hash[k, v.map(&:last)]}
  end
end

