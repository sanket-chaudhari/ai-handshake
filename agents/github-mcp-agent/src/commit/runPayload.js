const { execSync } = require('child_process');
const path = require('path');

function runPayload(mcpPath = 'mcp-payload.json') {
  const scriptPath = path.resolve(__dirname, '../../../run-mcp.js');
  try {
    console.log(`🚀 Running MCP payload from ${mcpPath}...`);
    execSync(`node ${scriptPath} ${mcpPath}`, { stdio: 'inherit' });
    console.log('✅ Payload executed successfully.');
  } catch (err) {
    console.error('❌ MCP execution failed:', err.message);
  }
}

module.exports = { runPayload };