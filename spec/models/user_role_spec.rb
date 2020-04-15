require 'rails_helper'

RSpec.describe UserRole, type: :model do
  subject { user_role }

  let(:user_role) { build(:user_role) }

  it 'assocs' do
    is_expected.to belong_to(:user)
  end

  it 'validations' do
    is_expected.to validate_presence_of(:role)
  end
end
