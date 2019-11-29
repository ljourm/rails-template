module BaseFriendlyId
  extend ActiveSupport::Concern

  included do
    include FriendlyId
    friendly_id :uuid
    before_create { self.uuid = SecureRandom.uuid }
  end
end
