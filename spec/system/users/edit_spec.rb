require 'rails_helper'

RSpec.describe '/users', type: :system, js: true do
  subject { page }

  let(:login_user) { create(:user, :with_info) }
  let(:user) { create(:user, :with_info, user_roles: [user_role]) }
  let(:user_role) { build(:user_role, name: 'role_management') }

  before do
    sign_in login_user
    visit "/users/#{user.uuid}"
  end

  context 'ページにアクセスした時' do
    it '入力項目が表示されること' do
      is_expected.to have_content('氏名')
      is_expected.to have_field('name', with: user.user_info.name)

      is_expected.to have_content('EMail')
      is_expected.to have_field('email', with: user.email)

      is_expected.to have_content('パスワード')
      is_expected.to have_field('password', with: '')

      is_expected.to have_content('パスワード確認')
      is_expected.to have_field('password_confirmation', with: '')

      is_expected.to have_content('ロール')
      is_expected.to have_content('ロール管理')
      is_expected.not_to have_content('ユーザ管理')
    end
  end

  context '各項目を入力して送信した時' do
    let(:name) { '氏名' }
    let(:email) { 'test@example.com' }

    before do
      fill_in 'name', with: name
      fill_in 'email', with: email

      # ロール管理を削除
      find('.roles a.delete').click

      # ユーザ管理を追加
      find('.roles input').click
      find('.roles a.dropdown-item:nth-child(2)').click

      # 適当なところをクリックしてロールの選択肢を消す
      find('input[name="name"]').click

      click_on('送信')
    end

    it 'ユーザ情報が変更されること' do
      visit '/users'

      is_expected.to have_content(name)
      is_expected.to have_content(email)
      is_expected.to have_content('ユーザー管理')
      is_expected.not_to have_content('ロール管理')
    end
  end

  context '削除ボタンを押下した時' do
    before do
      click_on('削除')
    end

    it 'ユーザが一覧から消えること' do
      visit '/users'

      is_expected.not_to have_content(user.user_info.name)
    end
  end
end
