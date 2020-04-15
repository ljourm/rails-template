class UserInfo < ApplicationRecord
  include BaseFriendlyId

  belongs_to :user

  validates :name, presence: true
end
