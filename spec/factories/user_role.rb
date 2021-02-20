FactoryBot.define do
  factory :user_role do
    user { build(:user) }
    name { '' }
  end
end
