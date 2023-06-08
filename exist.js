const fs = require('fs');
// Check if file exists asynchronously
fs.exists('file.txt', (fileExists) => {
    console.log('File exists:', fileExists);
  });