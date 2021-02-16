class RenameRoleToKeyOfUserRoles < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_roles, :role, :name
  end
end
