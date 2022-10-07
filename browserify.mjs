import browserify from 'browserify';
import tsify from 'tsify';
import path from 'path';
import fs from 'fs';

const outDir = './public/';
const outFile = 'bundle.js';

fs.mkdirSync(outDir, { recursive: true });

browserify()
  .add('src/index.ts')
  .plugin(tsify, { noImplicitAny: true })
  .bundle()
  .on('error', (error) => {
    console.error(error.toString());
  })
  .pipe(fs.createWriteStream(path.join(outDir, outFile)));
