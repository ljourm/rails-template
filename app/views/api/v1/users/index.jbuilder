json.users do
  json.array! @users do |user|
    json.extract! user, :uuid, :email
    json.extract! user.user_info, :name
    json.roles user.roles_i18n
  end
end
