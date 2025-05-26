const readline = require('readline');
const { execSync } = require('child_process');

function ask(question) {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function maybePush() {
  const answer = await ask('🔄 Push commit to GitHub? (y/N): ');
  if (answer.trim().toLowerCase() === 'y') {
    try {
      execSync('git push origin HEAD', { stdio: 'inherit' });
      console.log('🚀 Pushed successfully.');
    } catch (err) {
      console.error('❌ Push failed:', err.message);
    }
  } else {
    console.log('⏭️  Skipping push.');
  }
}

module.exports = { maybePush };