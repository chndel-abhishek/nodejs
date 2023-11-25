const http = require('http');

const port = process.env.PORT || 6443;

const server = http.createServer((req, res) => {
    // Ensure that your application is serving the correct response
    res.write("This is Version: v2");
    res.end();

    // Log the incoming request for testing purposes
    console.log(`Received request for: ${req.url}`);
});

// Trust the first proxy (in this case, Nginx)
server.set('trust proxy', 1);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
