class User < ApplicationRecord
  include BaseFriendlyId

  # Include default devise modules. Others available are:
  # :registerable, :recoverable, :rememberable
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :validatable, :lockable, :trackable

  has_one :user_info, autosave: true, dependent: :destroy
  has_many :user_roles, dependent: :destroy

  validates :user_info, presence: true

  def role?(name)
    user_roles.exists?(name: name)
  end

  def roles
    user_roles.map { |user_role| user_role.name.to_sym }
  end

  def roles_i18n
    user_roles.map(&:name_i18n)
  end

  def replace_roles!(names)
    source = roles.to_set
    dest = names.map(&:to_sym).to_set

    user_roles.where(name: (source - dest)).each(&:destroy!) # rubocop:disable Rails/FindEach:

    (dest - source).each do |name|
      user_roles.create!(name: name)
    end

    dest
  end
end
