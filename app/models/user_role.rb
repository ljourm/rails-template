class UserRole < ApplicationRecord
  include BaseFriendlyId

  NAME_VALUES = {
    role_management: 0,
    user_management: 1,
  }.freeze
  NAMES = NAME_VALUES.keys.map(&:to_s).freeze

  enum name: NAME_VALUES

  belongs_to :user

  validates :name, presence: true, inclusion: { in: NAMES }
end
