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

  belongs_to :user, optional: true
end