// function addNumbers(a, b) {
//     return a + b;
//   }
  
//   const result = addNumbers(5, 7);
//   console.log(result); 


  function addNumbersAsync(a, b, callback) {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 1000); 
  }
  
  addNumbersAsync(5, 7, (result) => {
    console.log(result); 
  });


  