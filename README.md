# Rails Template

## DB設定

```
sudo -u postgres -i
psql
create role rails_template with createdb login password 'password';
```

## 初期化

```
rails new rails-template --database=postgresql --skip-turbolinks --skip-test --skip-bundle
```
