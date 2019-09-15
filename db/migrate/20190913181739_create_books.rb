class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :authors
      t.string :imageURL
      t.string :description

      t.timestamps
    end
  end
end
