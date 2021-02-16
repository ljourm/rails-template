class User < ApplicationRecord
  include BaseFriendlyId

  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable, :lockable, :trackable

  has_one :user_info, autosave: true, dependent: :destroy
  has_many :user_roles, dependent: :destroy

  validates :user_info, presence: true

  def role?(role)
    user_roles.exists?(role: role)
  end

  def roles
    user_roles.map { |user_role| user_role.role.to_sym }
  end

  def roles_i18n
    user_roles.map(&:role_i18n)
  end
end
