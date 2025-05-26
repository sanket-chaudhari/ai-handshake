const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config();

const repo = process.env.TARGET_REPO;
const workDir = process.env.WORK_DIR || '.tmp/github-repo';
const branch = process.env.TARGET_BRANCH || 'main';

async function cloneOrPullRepo() {
  if (!repo) throw new Error('❌ TARGET_REPO not set in .env');

  const git = simpleGit();

  if (!fs.existsSync(workDir)) {
    console.log(`📦 Cloning ${repo}...`);
    await git.clone(repo, workDir, ['--branch', branch]);
  } else {
    console.log(`🔄 Pulling latest changes from ${repo}...`);
    await git.cwd({ path: workDir, root: false });
    await git.pull('origin', branch);
  }
}

module.exports = { cloneOrPullRepo };