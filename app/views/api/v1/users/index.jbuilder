json.users do
  json.array! @users do |user|
    json.extract! user, :email
    json.user_info do
      json.name user.user_info.name
    end
    json.user_roles do
      json.array! user.user_roles do |user_role|
        json.role user_role.role_i18n
      end
    end
  end
end
