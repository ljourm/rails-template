FROM node:12.16.1 as node
FROM ruby:2.6.6

ENV LANG C.UTF-8
ENV YARN_VERSION 1.22.0
ENV BUNDLER_VERSION 2.0.1
ENV APP_ROOT /app

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE 1
ENV DEBIAN_FRONTEND noninteractive

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn-v${YARN_VERSION} /opt/yarn
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn

RUN sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' \
 && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && apt-get update \
 && apt-get -y install google-chrome-stable \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN cd /usr/local/share/fonts/ \
 && wget -q "https://github.com/googlei18n/noto-cjk/blob/master/NotoSansCJKsc-Medium.otf?raw=true" \
 && fc-cache -f -v

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
