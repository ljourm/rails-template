class UserRole < ApplicationRecord
  include BaseFriendlyId

  NAMES = {
    role_management: 0,
    user_management: 1,
  }.freeze

  enum name: NAMES

  belongs_to :user

  validates :name, presence: true
end
