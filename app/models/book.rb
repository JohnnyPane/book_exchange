class Book < ApplicationRecord
  validates :title, :authors, :description, presence: true

  belongs_to :wish_list,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :WishList

end