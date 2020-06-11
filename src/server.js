const express = require('express');

const app = express();

app.get('/', function(request, response) {
    response.send('Helou world!')
});

app.get('/quotes', function(request, response) {
    response.json({ data: 'get' });
})

app.post('/quotes', function(request, response) {
    response.json({ data: 'post' });
});

app.put('/quotes', function(request, response) {
    response.json({ data: 'put' });
});

app.delete('/quotes', function(request, response) {
    response.json({ data: 'delete' });
})


app.listen(8000, function() {
    console.log("Server Listening in http://localhost:8000");
})