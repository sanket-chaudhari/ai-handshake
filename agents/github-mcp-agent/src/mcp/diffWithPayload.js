const fs = require('fs');
const path = require('path');

function comparePayloadToRepo(payload, repoFiles) {
  const diffs = [];

  for (const file of payload.files || []) {
    const match = repoFiles.find(f => f.path === file.path);
    if (!match) {
      diffs.push({ type: 'new', path: file.path });
    } else if (match.content !== file.content) {
      diffs.push({ type: 'changed', path: file.path });
    }
  }

  return diffs;
}

module.exports = { comparePayloadToRepo };