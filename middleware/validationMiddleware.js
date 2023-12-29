// middleware/validationMiddleware.js
module.exports = {
    validatePlayer(req, res, next) {
      const { name, country, score } = req.body;
  
      if (!name || !country || !score) {
          return res.status(400).json({ error: 'All attributes are mandatory' });
      }
  
      if (name.length > 15) {
          return res.status(400).json({ error: 'Name should have a maximum of 15 characters' });
      }
  
      if (country.length !== 2) {
          return res.status(400).json({ error: 'Country should be a two-letter code' });
      }
  
    
      next();
    },
  };
  