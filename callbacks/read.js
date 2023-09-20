const axios = require('axios');
const fs = require('fs');


axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
     .then(bubu => console.log(bubu.data))
     .catch(err=> console.log(err.message))




