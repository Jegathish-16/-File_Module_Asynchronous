const fs = require('fs');
// Append to file asynchronously
fs.appendFile('newfile.txt', '\nAppended content', 'utf8', (error) => {
    if (error) {
      console.error('Error appending to file:', error);
    } else {
      console.log('Content appended successfully');
    }
  });