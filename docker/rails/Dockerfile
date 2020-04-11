FROM node:12.16.1 as node
FROM ruby:2.6.6

ENV LANG C.UTF-8
ENV YARN_VERSION 1.22.0
ENV BUNDLER_VERSION 2.0.1
ENV APP_ROOT /app

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn-v${YARN_VERSION} /opt/yarn
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn

RUN gem install bundler -v $BUNDLER_VERSION

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

COPY ./Gemfile $APP_ROOT
COPY ./Gemfile.lock $APP_ROOT
COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

# RUN bundle install
# RUN yarn install
# COPY ./ $APP_ROOT
