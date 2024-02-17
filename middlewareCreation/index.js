// middleware function
const requestLoggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const accessToken = req.headers.authorization || 'No Access Token';
  
    console.log(`[${timestamp}] ${req.method}: ${req.url}, AccessToken: "${accessToken}"`);
    
    next(); 
  };
  
  // Apply the middleware globally to all routes 
  const express = require('express');
  const app = express();
  
  // Apply the middleware globally
  app.use(requestLoggerMiddleware);
  
  // Define your routes
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  