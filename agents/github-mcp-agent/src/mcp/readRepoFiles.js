const fs = require('fs');
const path = require('path');

function readAllFiles(dir, baseDir = dir) {
  let results = [];

  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.relative(baseDir, fullPath);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(readAllFiles(fullPath, baseDir));
    } else {
      const content = fs.readFileSync(fullPath, 'utf8');
      results.push({ path: relPath, content });
    }
  });

  return results;
}

module.exports = { readAllFiles };