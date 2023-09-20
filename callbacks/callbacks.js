
const fs = require('fs');

const data = {name:"bubu",age:"123123"}

//fs.writeFileSync("data.json",JSON.stringify(data,null,2))


// Writing to a file asynchronously with a callback
fs.writeFile('data.json', JSON.stringify(data), (err) => {
  if (err) {
    console.log(err,'error message');
    return;
  }
  console.log('Writing in file sucessfully');
});

console.log(1);

// Reading a file asynchronously with a callback
fs.readFile('data.json', 'utf8', (err, data) => {
  if(data){
    console.log(data);
  }
});


// const data1 = fs.readFileSync('data1.json','utf-8');
// console.log(data1);

// console.log(2);

// ------------------------------------------------------------

function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log("Task is done!");
    callback();
  }, 2000); 
}

function callbackFunction() {
  console.log("Callback function is executed!");
}

doSomethingAsync(callbackFunction);

// -------------------------------------------


function doSomethingAsync(callbackSuccess, callbackError) {
  setTimeout(function() {
    const success = true; 
    if (success) {
      callbackSuccess("Task is done!");
    } else {
      callbackError("An error occurred!");
    }
  }, 2000); 
}

function successCallback(message) {
  console.log(message);
}

function errorCallback(errorMessage) {
  console.error(errorMessage);
}

doSomethingAsync(successCallback, errorCallback);

//-----------------------------------------------------

const fs = require('fs');

function listFilesInDirectory(directoryPath, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, files);
    }
  });
}

listFilesInDirectory('./my-directory', (err, files) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Files in directory:', files);
  }
});

// ---------------------------------------------------







