class Book < ApplicationRecord
  validates :title, :authors, :description, :author_id, presence: true

  belongs_to :wishlist,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Wishlist

  belongs_to :user, optional: true
end