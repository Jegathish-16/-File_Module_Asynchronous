const fs = require('fs');
// Rename file asynchronously
fs.rename('newfile.txt', 'renamedfile.txt', (error) => {
    if (error) {
      console.error('Error renaming file:', error);
    } else {
      console.log('File renamed successfully');
    }
  });