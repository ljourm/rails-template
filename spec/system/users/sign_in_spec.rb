require 'rails_helper'

RSpec.describe 'users/sign_in', type: :system do
  context 'ログイン済み' do
    let(:login_user) { create(:user) }
    before { sign_in login_user }

    context 'ページにアクセスした時' do
      before { visit new_user_session_path }

      it 'リダイレクトされること' do
        expect(current_path).to eq('/')
      end
    end
  end

  context '未ログイン' do
    context 'トップにアクセスした時' do
      before { visit root_path }

      it 'ログイン画面にリダイレクトされること' do
        expect(current_path).to eq(new_user_session_path)
      end
    end
  end
end
