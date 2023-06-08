const fs = require('fs');
// Get file information asynchronously
fs.stat('file.txt', (error, fileStats) => {
    if (error) {
      console.error('Error getting file information:', error);
    } else {
      console.log('File size:', fileStats.size, 'bytes');
      console.log('File last modified:', fileStats.mtime);
    }
  });