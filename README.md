# Rails Template

## セットアップ手順


### DB設定

```
sudo -u postgres -i
psql
create role rails_template with createdb login password 'password';
```

### Rails

```
bundle install --path vendor/bundle
bundle exec rails db:setup

yarn install

bundle exec rails s
```

## デプロイ

### Ubuntu 18.04 LTS

```
apt -y install libpq-dev

/usr/local/rbenv/shims/bundle exec rails db:migrate RAILS_ENV=production
/usr/local/rbenv/shims/bundle exec rake assets:precompile
/usr/local/rbenv/shims/bundle exec rails s -e production -p 3000 -d
```

## rails new

```
rails new rails-template --database=postgresql --skip-turbolinks --skip-test --skip-bundle
```
