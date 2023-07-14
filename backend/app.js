const express = require('express');
const { exec } = require('child_process');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())
app.get('/api/executeScript', (req, res) => {
  // Execute the script
  exec('bash ./getData.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`Script execution error: ${error}`);
      res.status(500).json({ error: 'Script execution failed' });
      return;
    }

    console.log(`Script executed successfully. Output: ${stdout}`);
    res.status(200).json({ message: 'Script executed successfully' });
  });
});

app.listen(9000, () => {
  console.log('Backend server is running');
});
