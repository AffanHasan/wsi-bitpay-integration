const http = require('http');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    const responseBody =
    `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>A Basic HTML5 Template</title>
    </head>
    <body><span>Hello World!</span><script type="javascript">
    </script>
    </body>
    </html>`;
    response.write(JSON.stringify(responseBody));
    response.end();
  });
}).listen(port);
