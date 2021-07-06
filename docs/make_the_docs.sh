#!/bin/bash
# make_the_docs.sh

cd $(dirname $0)/..
#export PIPENV_PIPFILE=$(pwd)/..
#echo "PIPENV_PIPFILE: ${PIPENV_PIPFILE}"

pipenv run sphinx-build -b html ./docs ./docs/build/
sensible-browser docs/build/index.html &

