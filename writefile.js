const fs = require('fs');
// Write to file asynchronously
fs.writeFile('newfile.txt', 'Hello, World!', 'utf8', (error) => {
    if (error) {
      console.error('Error writing file:', error);
    } else {
      console.log('File written successfully');
    }
  });