//
// fetch('https://jsonplaceholder.typicode.com/posts/4')
//     .then(result => console.log(result.json()))
//     .catch(err=> console.log(err.message))


function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}




async function result () {
  return  await Promise.all(
       [
                fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/2'),
                fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/3')
              ]
        )


}

async  function res () {
    const bubu = await result();
    console.log(bubu)
}

res()

//result().then(res => console.log(res))









