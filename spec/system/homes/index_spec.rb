require 'rails_helper'

RSpec.describe '/', type: :system, js: true do
  subject { page }

  let(:login_user) { create(:user, :with_info) }

  before do
    sign_in login_user
    visit '/'
  end

  context 'ページにアクセスした時' do
    it 'コンテンツが表示されること' do
      is_expected.to have_content('Top Page')
    end
  end
end
