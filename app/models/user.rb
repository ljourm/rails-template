class User < ApplicationRecord
  include BaseFriendlyId

  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable, :lockable, :trackable

  has_one :user_info, dependent: :destroy
  has_many :user_roles, dependent: :destroy

  validates :user_info, presence: true
end
