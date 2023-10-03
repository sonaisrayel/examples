const {getTodos} = require('./mongo');

getTodos().then(todo=>console.log(todo))
