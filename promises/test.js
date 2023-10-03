const  fs = require('fs')

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

function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile('number1.txt', 'utf-8', (err, result) => {
            if (err) {
                return reject('err in read2')
            }
            //throw new Error(result)
            resolve(Number(result))
        })
    })
}

 //
 // Promise.allSettled( [read1(),read2()])
 //    .then(result=> console.log(result))
 //    .catch(err=>console.log(err.message))



async function result () {
    const [data1,data2] =  await Promise.all( [read1(),read2()]);
    return data1
}


async function waiter(){
    setTimeout(()=> {
        console.log(11111)
    },1000)
};




const newOne = async () => {
    await waiter()
}

// (()=> {
//     console.log(111111)
// })()

(async () => {
    console.log(11123123)
})();

(async () => {
    await newOne()
})();












