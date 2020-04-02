# Rails Template

## 構成

- Ruby 2.6.4
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
docker-compose up -d
docker-compose exec app bundle exec rails db:setup
```

## セットアップ手順 (本番編)

### Ubuntu 18.04 LTS

```
# 予めPostgreSQLをインストールしておく

apt -y install libpq-dev

/usr/local/rbenv/shims/bundle exec rails db:migrate RAILS_ENV=production
/usr/local/rbenv/shims/bundle exec rails s -e production -p 3000 -d
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
