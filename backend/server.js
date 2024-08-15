// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data fetched successfully!' });
});

const port = 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
