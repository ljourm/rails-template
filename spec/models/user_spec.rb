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

  describe '#role?' do
    subject { user.role?(role_name) }

    let(:role_name) { :role_management }

    context 'has role' do
      let(:user) { create(:user, :with_info, user_roles: [user_role]) }
      let(:user_role) { build(:user_role, role: role_name) }

      it { is_expected.to be(true) }
    end

    context 'has no role' do
      it { is_expected.to be(false) }
    end
  end

  describe '#roles' do
    subject { user.roles }

    let(:user) { build(:user, :with_info, :with_all_roles) }

    it { is_expected.to match_array %i[role_management user_management] }
  end

  describe '#roles_i18n' do
    subject { user.roles_i18n }

    let(:user) { build(:user, :with_info, :with_all_roles) }

    it { is_expected.to match_array %w[ユーザー管理 ロール管理] }
  end
end
