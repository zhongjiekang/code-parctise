class CreateInputTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :input_texts do |t|
      t.text :content
      t.integer :num_of_vowels
      t.timestamps
    end
  end
end
