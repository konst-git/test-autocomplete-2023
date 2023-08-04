const fs = require('fs');
const readline = require('readline');

async function readSuggestions(prefix) {
  const fileStream = fs.createReadStream('./priv/asset/wordlist.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  const res = [];
  
  rl.on('line', (line) => {
    if (line.startsWith(prefix)) {
      res.push(line);
    }
  });
  
  rl.on('close', () => {
    console.log('Finished reading the file.');
  });

  return res;
};

module.exports = readSuggestions;
