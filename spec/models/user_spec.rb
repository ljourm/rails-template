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
    subject { user.role?(name) }

    let(:name) { :role_management }

    context 'has role' do
      let(:user) { create(:user, :with_info, user_roles: [user_role]) }
      let(:user_role) { build(:user_role, name: name) }

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

  describe '#replace_roles!' do
    subject { user.replace_roles!(names) }

    let(:user) { create(:user, :with_info, user_roles: [user_role]) }
    let(:user_role) { build(:user_role, name: :user_management) }

    describe 'normal' do
      before do
        subject
        user.save!
        user.reload
      end

      context '1 -> 2' do
        let(:names) { %i[user_management role_management] }

        it { expect(user.roles).to match_array names }
      end

      context '1 -> 0' do
        let(:names) { [] }

        it { expect(user.roles).to match_array names }
      end

      context '1 -> 1 (same role)' do
        let(:names) { %i(user_management) }

        it do
          expect(user.roles).to match_array names
          expect(user.user_roles.first).to eq user_role
        end
      end

      context '1 -> 1 (different role)' do
        let(:names) { %i(role_management) }

        it { expect(user.roles).to match_array names }
      end
    end

    describe 'abnormal' do
      context 'invalid role name' do
        let(:names) { %i(invalid) }

        it do
          expect { subject }.to raise_error(ArgumentError)
          expect(user.roles).to match_array %i(user_management)
          expect(user.user_roles.first).to eq user_role
        end
      end
    end
  end
end
