class User < ApplicationRecord
  include BaseFriendlyId

  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable
end
