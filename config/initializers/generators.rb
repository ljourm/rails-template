Rails.application.config.generators do |g|
  g.template_engine      :slim
  g.stylesheets          false
  g.javascripts          false
  g.helper               false
  g.jbuilder             false
  g.test_framework       :rspec,
    fixture:             true,
    fixture_replacement: :factory_bot,
    controller_specs:    false,
    view_specs:          false,
    routing_specs:       false,
    helper_specs:        false,
    integration_tool:    false
end
