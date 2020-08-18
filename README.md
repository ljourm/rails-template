# Rails Template

Railsアプリのスタートアップの際にテンプレートとして使用することを想定したプロジェクト。

## 構成

- Ruby 2.6.6
- Rails 6.0.1
- PostgreSQL 12.2
- Webpack 4.41.2

## ブランチ構成

### master

必ず使用すると思われるGemや設定を導入したブランチ。

### vue

masterで導入したGemや設定に加えて以下を導入。

- Vue
- Vuex
- Vue Rooter
- Buefy

### 運用方針

- WebpackやVueに関係ない設定はmasterブランチに
- vueブランチには最新masterブランチを常にマージ

## セットアップ手順 (ローカル編)

### DB設定

```
# 予めPostgreSQLをインストールしておく

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

## セットアップ手順 (Docker編)

```
docker-compose run --rm app bundle
docker-compose run --rm app yarn
docker-compose up -d
docker-compose exec app bundle exec rails db:setup
```

## セットアップ手順 (本番編)

### Ubuntu 18.04 LTS

```
# 予めPostgreSQLをインストールしておく

apt -y install libpq-dev

RAILS_ENV=production /usr/local/rbenv/shims/bundle exec rails assets:precompile
RAILS_ENV=production RAILS_TEMPLATE_DATABASE_PASSWORD=password /usr/local/rbenv/shims/bundle exec rails db:migrate
RAILS_TEMPLATE_DATABASE_PASSWORD=password RAILS_SERVE_STATIC_FILES=true /usr/local/rbenv/shims/bundle exec rails s -e production -d
```

## ログイン情報

以下は`/db/seeds` によって生成される。

- 通常
  - email: `dev@example.com`
  - password: `password`
- 管理者
  - email: `admin@example.com`
  - password: `password`

## コマンド

### 全ブランチ共通

```
# RSpec
bundle exec rspec

# Rubocop
bundle exec rubocop
```

### vueブランチのみ

詳細は `package.json` を参照。以下は代表的なもののみ。

```
# eslint, stylelintの実行
yarn alllint

# eslint, stylelintの実行・適用
yarn fixlint
```

## 本番環境のDB接続設定

### credential.ymlの修正

```
EDITOR=vim bundle exec rails credentials:edit

# 初期設定
secret_key_base: # 省略

production:
  db_host: db
  db_name: rails_template_development
  db_user: rails_template
  db_pass: password
staging:
  db_host: db
  db_name: rails_template_development
  db_user: rails_template
  db_pass: password
```

### config/master.key

デフォルトでは `config/master.key` をgit管理外にするようにしているが、このプロジェクトでは無効化している。
本番運用の際にはセキュリティー上の観点から `.gitignore` を書き換えておくこと。
