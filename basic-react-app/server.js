const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
require("dotenv").config({ path: "./.env" }); // Adjust the path if needed


const app = express();
// app.use(cors());
const port = process.env.REACT_APP_SERVER_PORT || 5010;
const TARGET_URL = process.env.REACT_APP_AEM_HOST;
const USE_PROXY = process.env.REACT_APP_USE_PROXY;

// Function to get Basic Auth header
const getAEMBasicAuth = () => {
  const credentialsString = `${process.env.REACT_APP_AEM_AUTH_USER}:${process.env.REACT_APP_AEM_AUTH_PASS}`;
  return "Basic " + Buffer.from(credentialsString).toString("base64");
};

// Proxy middleware options
const options = {
  target: `${TARGET_URL}`,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    if (USE_PROXY === "true") {
      proxyReq.setHeader("Authorization",  getAEMBasicAuth());
    }
  }
};


const proxy = createProxyMiddleware(options);
app.use('/content', proxy);

app.listen(port, () => console.log(`Listening on port ${port}`));