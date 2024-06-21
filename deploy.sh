#!/bin/bash

npm run build
rsync -a build/ root@www.ragfix.ai:/var/www/michaelcalvinwood.net/