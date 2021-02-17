require 'rails_helper'

RSpec.describe 'Api::V1::Roles', type: :request do
  let(:response_body) { JSON.parse(response.body) }
  let(:login_user) { create(:user, :with_info) }

  before { sign_in(login_user) }

  describe 'index' do
    subject(:request) { get '/api/v1/roles' }

    context 'normal' do
      before { request }

      let(:expected_response) do
        {
          'roles' => [
            { 'key' => 'role_management', 'name' => 'ロール管理' },
            { 'key' => 'user_management', 'name' => 'ユーザー管理' },
          ],
        }
      end

      it do
        expect(response_body).to eq(expected_response)
      end
    end
  end
end
