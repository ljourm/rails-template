require 'rails_helper'

RSpec.describe UserInfo, type: :model do
  subject { user_info }

  let(:user_info) { build(:user_info) }

  it 'assocs' do
    is_expected.to belong_to(:user)
  end

  it 'validations' do
    is_expected.to validate_presence_of(:name)
  end
end
