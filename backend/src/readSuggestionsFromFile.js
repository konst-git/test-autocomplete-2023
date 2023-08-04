const fs = require('fs');
const readline = require('readline');

async function readSuggestions(prefix) {

  const customPromise = new Promise((resolve, reject) => {
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
      resolve(res);
    });
    
    // Todo, handle file reading errors
    // reject(new Error('File reading error'))
  });

  return customPromise;


};

module.exports = readSuggestions;
