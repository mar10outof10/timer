const args = process.argv.slice(2);

const beep = () => process.stdout.write('\x07');

for (const arg of args) {
  const argInt = parseInt(arg);
  if (arg <= 0 || isNaN(arg)) {
    continue;
  }
  setTimeout(beep, arg * 1000)
}