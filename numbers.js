// async function withoutAwait() {
//     console.log("Starting withoutAwait");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Async operation completed");
//         resolve();
//       }, 1000);
//     });
//   }

//   function invokeWithoutAwait() {
//     withoutAwait(); // The function is invoked, but it's not awaited.
//     console.log("Function invoked without await");
//   }

//   invokeWithoutAwait();



//   async function withAwait() {
//     console.log("Starting withAwait");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Async operation completed");
//         resolve();
//       }, 1000);
//     });
//   }

//   async function invokeWithAwait() {
//     await withAwait(); // The function is invoked with 'await'.
//     console.log("Function invoked with await");
//   }

//   invokeWithAwait();


// function simulateAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Async operation completed");
//         }, 2000); // Simulating a 2-second asynchronous operation
//     });
// }

// async function res(){
//     const bubu = simulateAsyncOperation();
//     return bubu

// }

// (async function (){
//     const rr = await res()
//     console.log(rr);

// })()




// simulateAsyncOperation()
//     .then(result => {
//         console.log(result); // "Async operation completed" (after a 2-second delay)
//     })
//     .catch(error => {
//         console.error(error);
//     });







