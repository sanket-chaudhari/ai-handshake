#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function runMCP(payloadPath = 'mcp-payload.json') {
  const baseDir = process.cwd();

  let raw = '';
  try {
    raw = fs.readFileSync(payloadPath, 'utf8');
    if (!raw.trim()) throw new Error('File is empty.');
  } catch (err) {
    console.error(`❌ Failed to read payload at "{payloadPath}"`);
    console.error(`👉 Reason: {err.message}`);
    process.exit(1);
  }

  let payload = {};
  try {
    payload = JSON.parse(raw);
  } catch (err) {
    console.error(`❌ Invalid JSON in "{payloadPath}"`);
    console.error(`👉 JSON error: {err.message}`);
    process.exit(1);
  }

  console.log(`\n🧩 Applying MCP payload in {baseDir}...\n`);

  for (const file of payload.files) {
    const filePath = path.join(baseDir, file.path);
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(filePath, file.content);
    console.log(`✅ Created/updated: {file.path}`);
  }

  if (payload.commitMessage) {
    console.log(`\n📝 Suggested Git command:\n`);
    console.log(`\x1b[32mgit add .\x1b[0m`);
    console.log(`\x1b[32mgit commit -m "{payload.commitMessage}"\x1b[0m`);
    console.log(`\x1b[32mgit push origin main\x1b[0m\n`);
  }

  console.log('🎉 MCP applied.\n');
}

runMCP(process.argv[2]);
