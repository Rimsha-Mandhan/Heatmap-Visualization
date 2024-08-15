const express = require('express');
const { fetchData } = require('../controllers/dataController'); // Ensure the path is correct
const router = express.Router();

router.get('/data', fetchData);

module.exports = router;
