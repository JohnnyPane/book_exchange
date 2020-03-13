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

  def self.user_key
    all.group_by(&:user).map do |user, books|
      {
        user: user.username,
        titles: books.map { |book| book.title},
        author_id: user.id
      }
    end
  end

  def self.user_exchange_to_others_wish(current_user)
    current_user_exchange_list = Book.all.where.not(exchange_list_id: nil).where(author_id: current_user).user_key
    books_by_wishlist_author = Book.all.where.not(wishlist_id: nil).where.not(author_id: current_user).user_key
    user_exchange_books = current_user_exchange_list[0][:titles] 
    books_by_wishlist_author.map do |lists|
      matches = lists[:titles] & user_exchange_books
        {
          lists[:user] => {
            :wishes => matches,
            :author_id => lists[:author_id]
          }
        }
    end
  end

  def self.user_wishlists_to_others_exchange(current_user)
    current_user_wishlist = Book.all.where.not(wishlist_id: nil).where(author_id: current_user).user_key
    books_by_exchange_list_author = Book.all.where.not(exchange_list_id: nil).where.not(author_id: current_user).user_key
    user_wishlist_books = current_user_wishlist[0][:titles] 
    books_by_exchange_list_author.map do |lists|
      matches = lists[:titles] & user_wishlist_books
        {
          lists[:user] => {
            :exchanges => matches,
            :author_id => lists[:author_id]
          }
        }
    end
  end

  def self.exchange_list_wishlist_merge(current_user)
    # others_exchange_books = user_wishlists_to_others_exchange
    # others_wishlist_books = user_exchange_to_others_wish
    combined_wish_and_exchange = user_wishlists_to_others_exchange(current_user) + user_exchange_to_others_wish(current_user)
    combined_wish_and_exchange.flat_map(&:entries)
      .group_by(&:first)
      .map{|k,v| Hash[k, v.map(&:last)]}
  end

  def self.sorted_user_wish_to_others_exchange(current_user)
    exchange_list_wishlist_merge(current_user).sort_by { |hsh| hsh.keys.first }
  end

  def self.exchange_and_wishlists_to_single_obj(current_user)
    sorted_user_wish_to_others_exchange(current_user).map do |hsh|
      lists = hsh[hsh.keys.first]
      {
       hsh.keys.first => lists.reduce({}, :merge)
      }
    end
  end

  def self.add_book_info_to_sorted_lists(current_user)
    exchange_and_wishlists_to_single_obj(current_user).flat_map do |lists_by_user|
      lists_by_user.flat_map do |user, lists|
           {
             user =>
              {
              exchange_books: lists[:exchanges].flat_map do |book|
                Book.where(author_id: lists[:author_id]).where(title: book).where.not(exchange_list_id: nil)
              end,
              wishlist_books: lists[:wishes].flat_map do |book|
                 Book.where(author_id: lists[:author_id]).where(title: book).where.not(wishlist_id: nil)
              end
              }
           }
      end
    end
  end
end
