FactoryBot.define do
  factory :user_info do
    user { build(:user) }
    name { Faker::Name.name }
  end
end
