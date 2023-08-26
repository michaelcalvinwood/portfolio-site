#!/bin/bash

npm run build
rsync -a build/ root@michaelcalvinwood.net:/var/www/michaelcalvinwood.net/