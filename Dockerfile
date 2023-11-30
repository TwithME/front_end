FROM nginx

#nginx의 default.conf를 삭제
RUN mkdir /allso

WORKDIR /allso

RUN mkdir ./build

ADD ./build ./build

COPY ./nginx.conf /etc/nginx/conf.d

#host pc의 nginx.conf를 아래 경로에 복사
COPY ./build /usr/share/nginx/html


# 3000포트 개방
EXPOSE 3000

# 컨테이너 실행시 자동으로 실행항 command. nginx시작
CMD ["nginx", "-g", "daemon off;"]

