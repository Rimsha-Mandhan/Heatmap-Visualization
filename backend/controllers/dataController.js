const axios = require('axios');


// In your dataController.js
exports.fetchData = async (req, res) => {
    try {
      const response = await axios.get('API_ENDPOINT'); // Replace 'API_ENDPOINT' with the actual API endpoint
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data from external API:', error); // Log the detailed error
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  };
  
  
