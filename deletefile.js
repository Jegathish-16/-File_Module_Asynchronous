const fs = require('fs');
// Delete file asynchronously
fs.unlink('renamedfile.txt', (error) => {
    if (error) {
      console.error('Error deleting file:', error);
    } else {
      console.log('File deleted successfully');
    }
  });