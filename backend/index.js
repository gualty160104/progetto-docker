const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'hello-api' });
});

app.listen(port, () => {
  console.log(`Backend in ascolto su http://localhost:${port}`);
});



