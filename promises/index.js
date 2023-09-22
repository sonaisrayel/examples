
//const fs = require('fs').promises;
// fs.readFile('number.txt', 'utf-8')
//     .then(result => console.log(result))

const fs = require('fs');


//status - pending
//status -fulfiled
//status - rejected / error


function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile('number.txt', 'utf-8', (err, result) => {
            if (err) {
                return reject("error in read1")
            }
            resolve(result)

        })
    })
}

function read2(number) {
    return new Promise((resolve, reject) => {
        fs.readFile('number1.txt', 'utf-8', (err, result) => {
            if (err) {
                return reject('err in read2')
            }
            resolve(Number(result) + Number(number))

        })
    })
}

function read3(number) {
    return new Promise((resolve, reject) => {
        fs.readFile('number2.json', 'utf-8', (err, result) => {
            if (err) {
                return reject('err in read3')
            }
            resolve(Number(result) + Number(number))
        })
    })
}

read1()
    .then(result => { return read2(result) })
    .then(result => { return read3(result) })
    .then(result => console.log(result))
    .catch(err => console.log('error is', err))





