const JWT = require('jsonwebtoken');

const token = JWT.sign({ username: 'bubu' }, 'secret');

console.log(token)

const vf =  JWT.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJ1YnUiLCJpYXQiOjE2OTYzNDEzMzF9.lc2ha2M8u1JnMF4NqKRucLYn4fK3jLV5ORtNJVkECcU','secret')

console.log(vf)





