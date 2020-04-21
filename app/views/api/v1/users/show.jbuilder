json.user do
  json.extract! @user, :uuid, :email
  json.extract! @user.user_info, :name
  json.roles @user.user_roles.map(&:role)
end
