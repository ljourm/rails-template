FROM node:12.16.1 as node
FROM ruby:2.6.6

ENV LANG C.UTF-8
ENV YARN_VERSION 1.22.0
ENV BUNDLER_VERSION 2.0.1
ENV PASSWORD password

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE 1
ENV DEBIAN_FRONTEND noninteractive

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /opt/yarn-v${YARN_VERSION} /opt/yarn
RUN ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn

RUN apt-get update \
 && apt-get install -y openssh-server git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN mkdir /var/run/sshd
RUN echo "root:${PASSWORD}" | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

# SSHで接続した状態で以下のコマンドを実行すること
# gem install bundler -v $BUNDLER_VERSION
