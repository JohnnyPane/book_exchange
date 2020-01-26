class CreateExchangeLists < ActiveRecord::Migration[5.2]
  def change
    create_table :exchange_lists do |t|
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :exchange_lists, :author_id
  end
end
