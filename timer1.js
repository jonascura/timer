const args = process.argv.slice(2);

for (let i in args) {
  if (args[i] > 0) {
    let x = (args[i] * 1000);
    setTimeout(() => {
      console.log(`Beep`);
      process.stdout.write('\x07');
    }, x);
  }
}