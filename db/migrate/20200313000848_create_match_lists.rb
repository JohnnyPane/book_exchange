class CreateMatchLists < ActiveRecord::Migration[5.2]
  def change
    create_table :match_lists do |t|
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :match_lists, :author_id
  end
end

