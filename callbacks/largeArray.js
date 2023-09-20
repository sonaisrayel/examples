function processLargeDataset(data) {
    return `Processed ${data.length} records`;
  }
  
  const data = [...Array(1000000).keys()]; 
  const result = processLargeDataset(data);
  console.log(result);

  

  function processLargeDatasetAsync(data, callback) {
    setTimeout(() => {
      const result = `Processed ${data.length} records`;
      callback(result);
    }, 3000); 
  }
  
  const data = [...Array(1000000).keys()]; 
  processLargeDatasetAsync(data, (result) => {
    console.log(result); 
  });


  console.log("Hello world!!!!");
  

  