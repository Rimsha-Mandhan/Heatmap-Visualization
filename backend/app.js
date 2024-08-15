const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', dataRoutes);

const port = 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
