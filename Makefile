DOCKER=docker
DOCKER_COMPOSE=docker-compose
SUDO=sudo
CHOWN=chown
RM=rm

image:
	${DOCKER_COMPOSE} build

reown:
	${SUDO} ${CHOWN} ${USER}: -R .

shell:
	${DOCKER_COMPOSE} run \
		-e BUNDLE_APP_CONFIG=/tmp/bundle \
		-e BUNDLE_BIN=/tmp/bundle/bin \
		-e BUNDLE_PATH=/tmp/bundle \
		-u `id -u`:`id -g` web bash
server:
	${DOCKER_COMPOSE} run web

prep:
	${DOCKER_COMPOSE} run test bash -c "sleep 5 && pwd && ls -la && bundle exec rake db:migrate"

rspec:
	${DOCKER_COMPOSE} run test

down:
	${DOCKER_COMPOSE} down

.PHONY:
	down image reown rspec server shell prep
