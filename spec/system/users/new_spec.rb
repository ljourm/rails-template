require 'rails_helper'

RSpec.describe '/users', type: :system, js: true do
  subject { page }

  let(:login_user) { create(:user, :with_info) }

  before do
    sign_in login_user
    visit '/users/new'
  end

  context 'ページにアクセスした時' do
    it '入力項目が表示されること' do
      is_expected.to have_content('氏名')
      is_expected.to have_field('name', with: '')

      is_expected.to have_content('EMail')
      is_expected.to have_field('email', with: '')

      is_expected.to have_content('パスワード')
      is_expected.to have_field('password', with: '')

      is_expected.to have_content('パスワード確認')
      is_expected.to have_field('password_confirmation', with: '')
    end
  end

  context '各項目を入力して送信した時' do
    let(:name) { '氏名' }
    let(:email) { 'test@example.com' }

    before do
      fill_in 'name', with: name
      fill_in 'email', with: email
      fill_in 'password', with: 'password'
      fill_in 'password_confirmation', with: 'password'

      click_on('送信')
    end

    it '新たにユーザが作成されること' do
      visit '/users'

      is_expected.to have_content(name)
      is_expected.to have_content(email)
    end
  end
end
