const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (req.method === 'CONNECT') {
    // If the method is CONNECT, we handle it as a tunneling request
    const target = req.url;

    // Respond to the CONNECT request and establish a tunnel
    res.writeHead(200, { 'Connection': 'Keep-Alive' });
    res.flushHeaders();

    // Now forward the traffic from the client to the destination
    const proxySocket = net.createConnection({ host: target, port: 443 }, () => {
      req.pipe(proxySocket);
      proxySocket.pipe(res);
    });

    proxySocket.on('error', (err) => {
      console.error('Proxy error:', err);
      res.writeHead(500);
      res.end();
    });
  } else {
    // Handle other types of HTTP requests (like GET, POST)
    proxy.web(req, res, { target: 'http://example.com' });
  }
});

server.listen(9080, () => {
  console.log('Proxy server is running on port 8080');
});