require 'simplecov'
SimpleCov.start 'rails' do
  add_filter '/app/admin/'

  coverage_dir 'coverage/rspec'
end
