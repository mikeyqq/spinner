let spins = ["|", "/", "-", "\\", "|", "/", "-", '\\', "|"]

let newTime = 100;
for(const char of spins){
 setTimeout(() => {
  process.stdout.write(char + '\r')}, newTime)
  newTime += 200;
  }
  console.log();