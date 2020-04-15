class UserRole < ApplicationRecord
  include BaseFriendlyId

  ROLES = {
    role_management: 0,
    user_management: 1,
  }.freeze

  enum role: ROLES

  belongs_to :user

  validates :role, presence: true
end
