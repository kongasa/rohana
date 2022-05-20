const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../src/html/');
const dest = path.join(__dirname, '../dist/html/');
fs.rmdirSync(dest, { recursive: true });
fs.mkdirSync(dest);

fs.readdirSync(src).forEach(filename => {
  const srcFile = path.join(src, filename);
  const destFile = path.join(dest, filename);
  fs.copyFileSync(srcFile, destFile);
});
