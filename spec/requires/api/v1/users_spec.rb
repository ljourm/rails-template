require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  let(:response_body) { JSON.parse(response.body) }
  let!(:login_user) { create(:user, :with_info) }
  let!(:user) { create(:user, :with_info) }

  before { sign_in(login_user) }

  describe 'index' do
    subject(:request) { get '/api/v1/users' }

    context 'normal' do
      before { request }

      it do
        expect(response_body['users'].size).to eq(2)
      end
    end
  end

  describe 'show' do
    subject(:request) { get "/api/v1/users/#{user.uuid}" }

    context 'normal' do
      before { request }

      let(:expected_response) do
        {
          'user' => {
            'uuid' => user.uuid,
            'email' => user.email,
            'name' => user.user_info.name,
            'roles' => [],
          },
        }
      end

      it do
        expect(response_body).to eq(expected_response)
      end
    end
  end

  describe 'create' do
    subject(:request) { post '/api/v1/users', params: params }

    context 'normal' do
      let(:params) do
        {
          user: {
            email: request_email,
            password: request_password,
            password_confirmation: request_password,
            name: request_name,
          },
        }
      end
      let(:expected_response) do
        {
          'user' => {
            'uuid' => User.last.uuid,
            'email' => request_email,
            'name' => request_name,
            'roles' => [],
          },
        }
      end
      let(:request_email) { 'request@example.com' }
      let(:request_password) { 'password' }
      let(:request_name) { 'test name' }

      it do
        expect { request }.to change(User, :count).by(1) &
                              change(UserInfo, :count).by(1)
        expect(response).to have_http_status(:ok)
        expect(response_body).to eq(expected_response)
      end
    end

    context 'abnormal' do
      let(:params) do
        {
          user: {
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
          },
        }
      end
      let(:expected_response) do
        {
          'messages' => [
            'Eメールを入力してください',
            'パスワードを入力してください',
            '氏名を入力してください',
          ],
        }
      end

      it do
        expect { request }.to change(User, :count).by(0) &
                              change(UserInfo, :count).by(0)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response_body).to eq(expected_response)
      end
    end
  end

  describe 'update' do
    subject(:request) { put "/api/v1/users/#{user.uuid}", params: params }

    context 'normal' do
      let(:params) do
        {
          user: {
            email: request_email,
            password: request_password,
            password_confirmation: request_password,
            name: request_name,
          },
        }
      end
      let(:expected_response) do
        {
          'user' => {
            'uuid' => user.uuid,
            'email' => request_email,
            'name' => request_name,
            'roles' => [],
          },
        }
      end
      let(:request_email) { 'request@example.com' }
      let(:request_password) { 'password' }
      let(:request_name) { 'test name' }

      it do
        expect { request }.to change(User, :count).by(0) &
                              change(UserInfo, :count).by(0)
        expect(response).to have_http_status(:ok)
        expect(response_body).to eq(expected_response)
      end
    end

    context 'abnormal' do
      let(:params) do
        {
          user: {
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
          },
        }
      end
      let(:expected_response) do
        {
          'messages' => [
            'Eメールを入力してください',
            'パスワードを入力してください',
            '氏名を入力してください',
          ],
        }
      end

      it do
        expect { request }.to change(User, :count).by(0) &
                              change(UserInfo, :count).by(0)
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response_body).to eq(expected_response)
      end
    end
  end

  describe 'delete' do
    subject(:request) { delete "/api/v1/users/#{user.uuid}" }

    context 'normal' do
      it do
        expect { request }.to change(User, :count).by(-1) &
                              change(UserInfo, :count).by(-1)
        expect(response).to have_http_status(:no_content)
      end
    end
  end
end
