const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beep = () => process.stdout.write('\x07');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me amigo, ciao!');
    process.exit();
  } else if (key === 'b') {
    beep();
  } else if (key > 0 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(beep, 1000 * key);
  }
});