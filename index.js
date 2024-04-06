var express = require('express');
var app = express();
PORT = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`App listen on port:${PORT}`)
})