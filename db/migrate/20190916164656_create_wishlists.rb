class CreateWishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.string :title, null: false
      t.string :genre
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :wishlists, :author_id
  end
end
