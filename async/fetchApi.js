const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
