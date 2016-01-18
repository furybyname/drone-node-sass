FROM furybyname/alpine-node-sass

ADD run.js /bin/
ADD run.sh /bin/
RUN chmod +x /bin/run.sh

WORKDIR /drone

ENTRYPOINT ["/bin/run.sh"]