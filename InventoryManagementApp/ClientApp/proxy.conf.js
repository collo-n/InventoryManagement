const { env } = require('process');

// Determine the backend target URL based on environment variables
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:18518';

console.log('Proxying requests to:', target);

const PROXY_CONFIG = [
  {
    // Add additional API endpoints as needed
    context: [
      "/weatherforecast", // Example existing endpoint
      "/api/items",       // Additional API route
      "/api/accounts"     // Additional API route
    ],
    target: target,
    secure: false, // Set to false to ignore SSL certificate errors (useful in development)
    changeOrigin: true, // Optional: for name-based virtual hosted sites
    proxyTimeout: 10000, // Timeout for the proxy to connect to the server
    headers: {
      Connection: 'Keep-Alive' // Keep connections open
    }
  }
]

module.exports = PROXY_CONFIG;
