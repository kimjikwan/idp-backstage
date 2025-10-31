require('dotenv').config();
const { spawn } = require('child_process');
// Pass all arguments after 'node start-dev.js' to backstage-cli
const cli = spawn('backstage-cli', process.argv.slice(2), {
  stdio: 'inherit',
  shell: true // Use shell to correctly find the backstage-cli executable
});

cli.on('close', (code) => {
  process.exit(code);
});
