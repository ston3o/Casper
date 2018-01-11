run:
	@ docker run --rm --name ghost -p 2368:2368 -v ${PWD}:/var/lib/ghost/content/themes/casper ghost

enter:
	@ docker exec -it ghost bash

restart:
	@ docker restart ghost
