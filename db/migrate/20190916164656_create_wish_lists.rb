class CreateWishLists < ActiveRecord::Migration[5.2]
  def change
    create_table :wish_lists do |t|
      t.string :title, null: false
      t.string :genre
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :wish_lists, :author_id
  end
end
