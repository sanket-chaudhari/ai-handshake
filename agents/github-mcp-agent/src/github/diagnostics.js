const fs = require('fs');
const path = require('path');

function logError(error, context = 'general') {
  const dir = path.join('.logs/github-agent', context);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const file = path.join(dir, `error-${Date.now()}.log`);
  fs.writeFileSync(file, String(error));
  console.error(`❌ Logged error to ${file}`);
}

module.exports = { logError };