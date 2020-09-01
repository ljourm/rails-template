require 'rails_helper'

RSpec.describe '/users', type: :system, js: true do
  subject { page }

  let(:login_user) { create(:user, :with_info) }

  let!(:users) do
    create_list(:user, 2, :with_info)
  end

  before do
    sign_in login_user
    visit '/users'
  end

  context 'ページにアクセスした時' do
    it 'ユーザ一覧が表示されること' do
      is_expected.to have_content(login_user.user_info.name)
      is_expected.to have_content(login_user.email)

      is_expected.to have_content(users[0].user_info.name)
      is_expected.to have_content(users[0].email)

      is_expected.to have_content(users[1].user_info.name)
      is_expected.to have_content(users[1].email)
    end
  end

  context 'ユーザ名をクリックした時' do
    before do
      click_on(users[0].user_info.name)
    end

    it 'ユーザ編集画面に遷移すること' do
      is_expected.to have_current_path("/users/#{users[0].uuid}")
      is_expected.to have_field('name', with: users[0].user_info.name)
    end
  end
end
