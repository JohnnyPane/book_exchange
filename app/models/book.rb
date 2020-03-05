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

  def self.books_by_wishlist_author
    Book.all.where.not(wishlist_id: nil).where.not(author_id: current_user).group_by(&:author_id)
  end

  def current_user_wishlist
    Book.all.where.not(wishlist_id: nil).where(author_id: current_user)
  end

  def books_by_exchange_list_author
    Book.all.where.not(exchange_list_id: nil).where.not(author_id: current_user).group_by(&:author_id)
  end

  def current_user_exchange_list
    Book.all.where.not(wishlist_id: nil).where(author_id: current_user)
  end

  def self.user_key
    all.to_a.group_by(&:user)
  end

  def book_usernames
    Book.all.map do |book|
      book.user.username 
    end
  end
end

