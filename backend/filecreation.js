const fs = require('fs');

const filename = 'example.txt';
const content = 'This is the content to be written to the files.';

fs.writeFile(filename, content, (err) => {
  if (err) {
    console.error('An error occurred while writing the file:', err);
  } else {
    console.log('File created and contents added successfully.');
  }
});
