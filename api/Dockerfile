FROM node:12-alpine AS builder
ARG CI_COMMIT_SHA
ARG GIT_COMMIT_TIME
ENV OS=docker TZ=Asia/Bangkok CI_COMMIT_SHA=$CI_COMMIT_SHA GIT_COMMIT_TIME=$GIT_COMMIT_TIME
ENV NODE_ENV=production
ENV NUXT_GENERATE_DIR=/app/dist

WORKDIR /app
COPY ["app/package.json", "app/yarn.lock", "./"]
RUN yarn install -D --silent
COPY app .
RUN yarn generate

FROM node:12-alpine

ARG CI_COMMIT_SHA
ARG GIT_COMMIT_TIME
ENV OS=docker TZ=Asia/Bangkok CI_COMMIT_SHA=$CI_COMMIT_SHA GIT_COMMIT_TIME=$GIT_COMMIT_TIME
ENV NODE_ENV=production

RUN apk  --update add \
  curl tzdata git

WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production --silent && yarn cache clean
COPY --from=builder /app/dist dist
COPY api .

EXPOSE 80 443
HEALTHCHECK --interval=15s --timeout=3s --retries=3 --start-period=10s \
  CMD curl --fail -k http://127.0.0.1/healthcheck || exit 1

# RUN addgroup -S user && adduser -S -G user user 
# USER user

CMD yarn start
