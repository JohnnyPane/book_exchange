class Wishlist < ApplicationRecord
  validates :title, :author_id, presence: true

  has_many :books

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

end