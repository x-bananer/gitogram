#!/usr/bin/env sh

set -e

npm run build

cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:x-bananer/gitogram.git master:gh-pages
