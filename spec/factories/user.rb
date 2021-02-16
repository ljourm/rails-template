FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'password' }
    password_confirmation { 'password' }

    trait :with_info do
      user_info { build(:user_info) }
    end

    trait :with_all_roles do
      user_roles { UserRole::NAMES.keys.map { |name| build(:user_role, name: name) } }
    end
  end
end
