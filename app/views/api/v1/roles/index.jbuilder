json.roles do
  json.array! UserRole.names.keys do |key|
    json.key key
    json.name t("enums.user_role.name.#{key}")
  end
end
