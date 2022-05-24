#!/usr/bin/env bash

flutter pub get
flutter pub global activate peanut
export PATH="$PATH":"$HOME/development/flutter/.pub-cache/bin"
flutter pub global run peanut

git stash
git checkout gh-pages

sed -e 's/href="\/"/href="https:\/\/alpiepho.github.io\/pinball\/"/' index.html  > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt index.html

sed -e 's/  "\/",/  "https:\/\/alpiepho.github.io\/pinball\/",/' flutter_service_worker.js                    > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt flutter_service_worker.js

sed -e 's/"main.dart.js",/"https:\/\/alpiepho.github.io\/pinball\/main.dart.js",/' flutter_service_worker.js  > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt flutter_service_worker.js

sed -e 's/"index.html",/"https:\/\/alpiepho.github.io\/pinball\/index.html",/' flutter_service_worker.js      > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt flutter_service_worker.js

sed -e 's/"assets\//"https:\/\/alpiepho.github.io\/pinball\/assets\//' flutter_service_worker.js              > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt flutter_service_worker.js

sed -e 's/"\__\/firebase\//"https:\/\/alpiepho.github.io\/pinball\/firebase\//' flutter_service_worker.js  > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt flutter_service_worker.js

# had to copy .../web/__/firebase to .../web/firebase
# gh doesnt like the __ for some reason
sed -e 's/"\/__\/firebase\//"\/pinball\/firebase\//' index.html                > /tmp/run_peanut.txt
mv /tmp/run_peanut.txt index.html 

git add index.html flutter_service_worker.js
git commit -m "update gh-pages paths"
git push

git checkout main
git stash pop
flutter pub get
