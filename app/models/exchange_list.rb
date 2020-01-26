class ExchangeList < ApplicationRecord
  validates :author_id, presence: true

  has_many :books

end