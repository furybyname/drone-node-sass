FROM ubuntu:14.04

RUN apt-get update

ADD run.js /bin/run.js
ADD run.sh /bin/run.sh


# Install libraries
RUN apt-get install -y curl ruby rubygems-integration python-dev libmysqlclient-dev python-setuptools nodejs npm && ln -s /usr/bin/nodejs /usr/bin/node && sudo su -c "gem install sass" && chmod +x /bin/run.sh

#FROM furybyname/alpine-node-sass


WORKDIR /drone/src

ENTRYPOINT ["node", "/bin/run.js"]