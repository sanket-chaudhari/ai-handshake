const dotenv = require('dotenv');
dotenv.config();

function validateGitHubToken() {
  const token = process.env.GITHUB_TOKEN;
  if (!token || !token.startsWith('ghp_')) {
    throw new Error('❌ Invalid or missing GITHUB_TOKEN in environment.');
  }
  return token;
}

module.exports = { validateGitHubToken };