class ActiveRecord::Migration::Current
  def define_uuid(table)
    reversible do |dir|
      dir.up do
        add_column    table, :uuid, :binary, length: 36, after: 'id', comment: 'UUID'
        change_column table, :uuid, :binary, length: 36, null: false
        add_index table, :uuid, unique: true
      end
      dir.down do
        remove_column table, :uuid
      end
    end
  end
end
