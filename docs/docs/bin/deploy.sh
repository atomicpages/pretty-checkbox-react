#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd $DIR
echo "Using directory: $DIR"

cd ../../../

# echo "Building flow docs..."
# npx react-docgen -o docs/docs/src/data/props.json src/**

cd docs/docs

echo "Build doc website..."
npm run build
cp -R build/* ../.
rm -rf build/
