run:
	@ docker run --rm --name ghost -p 2368:2368 \
		-e NODE_ENV=development \
		-v ${PWD}:/var/lib/ghost/content/themes/casper \
		-v ${PWD}/content/themes:/var/lib/ghost/content/themes/ \
		-v ${PWD}/content/data:/var/lib/ghost/content/data \
		-v ${PWD}/content/settings:/var/lib/ghost/content/settings \
		-v ${PWD}/content/images:/var/lib/ghost/content/images \
		ston3o/ghost

build:
	@ gulp build

dev:
	@ npm run dev

enter:
	@ docker exec -it ghost bash

restart:
	@ docker restart ghost

deploy: build
	@ git push origin master
	@ docker build -t ston3o/ghost .
	@ docker push ston3o/ghost
	@ ssh root@master "git -C /mnt/data/joachim-blog/ghost/themes/casper/ pull origin master"
	@ ssh root@master "docker service update --force joachim-blog_web"
