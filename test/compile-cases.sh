yarn babel ./test/compatibility-cases --presets=es2015,react --plugins="jsx-control-statements" --out-dir=./test/babel
node fuse.js
