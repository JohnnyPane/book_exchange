class Wishlist < ApplicationRecord
  validates :title, :author_id, presence: true

  has_many :books

end