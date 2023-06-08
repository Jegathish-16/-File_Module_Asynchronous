const fs = require('fs');

// Read file asynchronously
fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
  } else {
    console.log('File content:', data);
  }
});