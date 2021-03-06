class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :authors
      t.string :imageURL
      t.string :description
      t.integer :author_id, null: false
      t.integer :wishlist_id
      t.integer :exchange_list_id

      t.timestamps
    end
    add_index :books, :author_id
  end
end
