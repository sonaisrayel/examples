
// const odd = [];
// const even = [];

// const newArra = array.map(elem => {
//    if (elem % 2 !== 0) {
//       odd.push(elem)
//    } else {
//       even.push(elem)
//    };
// });


// array.forEach(elem => {
//    if (elem % 2 !== 0) {
//       return // continue
//    } else {
//       console.log(elem);
//    };
// });

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < array.length; index++) {
//    if (array[index] % 2 === 0) {

//       return
//    } else {
//       console.log(array[index]);
//    }
// }

// const NewArray = [...odd, ...even];


// const arr = [ 2,1, 3, 4, 5];


// let i = 0

// while (i < arr.length) {
//    if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     // i++
//     // continue;
//    }else {
//       console.log(arr[i]);

//    }
//     i++
// }


//sort

// const arr = [2, 8, 11, 1, 5, 0, 3];
// const newArra = arr.sort((a, b) => {
//    return b - a
// })

// console.log(newArra);


// const arr = [2, 1, 3, 4, 5];


// function includes(arr, number) {
//   return arr.indexOf(number) !== -1 
// }


//console.log(includes(arr, 5));

// const arr1 = arr.join("*")
// console.log(arr1);

//reduce - 

// const arr = [1,2,3]

// const addedNumber = arr.reduce((sum,el)=> {
//    console.log(sum,'sum');
//    console.log(el,'el');
//    console.log('---------');
//    return sum * el
// },1)

// console.log(addedNumber);


// 3. Տրված զանգվածից գտնել թվաբանական պրոգրեսիա պարունակող թվերը և տպել

// const arr3 = [2, 4, 6, 8, 11, 15, 18, 20, 22, 24]
// const arr4 = arr3.map((el, i) => {
//    if (arr3[i] - arr3[i - 1] === arr3[i + 1] - arr3[i]) {
//       return el;
//    }
// }
// )

// console.log(arr4);


// function getProgression(arr) {
//    let newArr = [];
//    for (let i = arr.length; i >= 0; i--) {
//       let second = arr[i - 1];
//       let third = arr[i - 2];
//       if (arr[i] - second === second - third) {
//          newArr.push(arr[i], second, third);
//       }
//    }
//    console.log(newArr)
// }

// getProgression([1, 4, 5, 6, 7, 9, 8, 10, 13, 17])

//console.log(arr4.filter(Number));

// const arr = [2, 4, 6, 8, 11, 15, 18, 20, 22, 24]
// const arr1 = []

//1) - second elemnet  - first   equals thrid element - second element 
// for (let i = 1; i < arr.length; i++) {
//    if (arr[i] - arr[i - 1] === arr[i + 1] - arr[i]) {
//       arr1.push([arr[i-1],arr[i],arr[i+1]])
//    }else {
//       continue
//    } 
// }


// const arr = [2, 4, 6, 8, 11, 15, 18, 20, 22, 24];
// const arr1 = [];

 // 1)  

// for (let i = 1; i < arr.length; i++) {
//    if (arr[i] - arr[i - 1] === arr[i + 1] - arr[i]) {
//       arr1.push([arr[i-1]]);
//      // arr1.push([arr[i-1],arr[i],arr[i+1]])
//    } else {
//       continue
//    } 
// }


const arr = [2, 4, 6, 8, 23, 45,44, 18, 20, 22];

let diff = arr[1] - arr[0];
const arr1 = [];
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] + diff === arr[i + 1] || arr[i] - diff === arr[i - 1]) {
    arr1.push(arr[i]);
    console.log(arr1);
    console.log('---------');
  } else {
   if(!arr1.length){
      continue
   }
    arr2.push(arr1);
   // arr1.length = 0;
  }
}

[2,4,6,8]
[18,20,22]

console.log(arr2);

//console.log(arr1);

// console.log(arr1);
// const progression = () => {
//    const arr = [1, 4, 4, 0, -8, -6, 3, 7, -2, 16, 4, 8, -10, 5];
//    let d = arr[1] - arr[0]
//    let elementsOfProgression = []
//    arr.find(e => {
//       let dif = Math.abs(e - arr[0])
//       if ((Number.isInteger(dif / d) === true) &&
//          (elementsOfProgression.includes(e) === false)) {
//          elementsOfProgression.push(e);
//       }
//       elementsOfProgression.sort(function (a, b) {
//          return a - b
//       })
//    })

//    return elementsOfProgression
// }

// console.log(progression())





















