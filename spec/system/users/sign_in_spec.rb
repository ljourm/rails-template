require 'rails_helper'

RSpec.describe 'users/sign_in', type: :system do
  context 'ログイン済み' do
    let(:login_user) { create(:user, :with_info) }

    before { sign_in login_user }

    context 'ページにアクセスした時' do
      before { visit new_user_session_path }

      it 'リダイレクトされること' do
        expect(page).to have_current_path('/')
      end
    end
  end

  context '未ログイン' do
    context 'トップにアクセスした時' do
      before { visit root_path }

      it 'ログイン画面にリダイレクトされること' do
        expect(page).to have_current_path(new_user_session_path)
      end
    end
  end
end
