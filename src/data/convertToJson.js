const fs = require('fs');

const words = fs.readFileSync('words.txt', 'utf-8');
const lines = words.split('\n');

const jsonString = JSON.stringify(lines);
const writeStream = fs.createWriteStream('words.json');

writeStream.write(`{"words": ${jsonString}}`, 'UTF-8');
