FROM furybyname/alpine-node-sass

ADD run.js /bin/run.js
ADD run.sh /bin/run.sh

RUN chmod +x /bin/run.sh
ENV NODE_ENV=production

WORKDIR /drone/src

ENTRYPOINT ["node", "/bin/run.js"]