class Book < ApplicationRecord
  validates :title, :authors, :description, presence: true

end