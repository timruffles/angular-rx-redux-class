#!/bin/bash
# builds a slide-deck from input slidedown
#
# usage:
#
#    ./tools/build.sh < cat slides/*.md > index.html

set -e

compiled=$(node tools/build.js)

cat templates/header.html <(echo "$compiled") templates/footer.html


