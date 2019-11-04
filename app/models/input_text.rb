class InputText < ApplicationRecord
  validates :content, presence: true
  after_create :update_vowels

  def count_vowels
    content.downcase.count('aeiou')
  end

  private
  def update_vowels
    update_attributes num_of_vowels: self.count_vowels
  end
end
