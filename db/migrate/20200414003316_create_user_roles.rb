class CreateUserRoles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_roles do |t|
      t.references :user, foreign_key: true, null: false
      t.integer :role, null: false

      t.timestamps
    end

    define_uuid :user_roles
  end
end
