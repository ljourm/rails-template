json.users do
  json.array! @users do |user|
    json.extract! user, :uuid, :email
    json.extract! user.user_info, :name
    json.roles user.user_roles.map(&:role_i18n)
  end
end
