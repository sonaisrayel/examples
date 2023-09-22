const arr = new Array(8);

const arr1 = arr.fill(0).map((elem,index)=> {
  return index*3+10
});

console.log(arr1);