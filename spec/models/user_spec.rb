require 'rails_helper'

RSpec.describe User, type: :model do
  subject { user }

  let(:user) { build(:user, :with_info) }

  it 'assocs' do
    is_expected.to have_one(:user_info)
    is_expected.to have_many(:user_roles)
  end

  it 'validations' do
    is_expected.to validate_presence_of(:user_info)
  end
end
