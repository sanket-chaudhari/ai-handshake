const { execSync } = require('child_process');
const fs = require('fs');

function commitWithMessage(payloadPath = 'mcp-payload.json') {
  let raw = '{}';
  try {
    raw = fs.readFileSync(payloadPath, 'utf8');
  } catch (err) {
    console.error('❌ Could not read payload:', err.message);
    return;
  }

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch (err) {
    console.error('❌ Invalid JSON:', err.message);
    return;
  }

  const message = payload.commitMessage || 'mcp: apply payload';
  try {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    console.log('✅ Commit successful.');
  } catch (err) {
    console.error('❌ Commit failed:', err.message);
  }
}

module.exports = { commitWithMessage };