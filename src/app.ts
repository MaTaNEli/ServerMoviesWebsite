import dotenv from 'dotenv';
dotenv.config();

import app from './servers';

const http = require('http').createServer(app);

// Server listen on http//localhost:3000
(async () => {
  //await initStorage();
  http.listen(process.env.PORT || 3000, () => console.log('Server is running'));
})();