function getMyPromise(url) {
  var promise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image load failure:' + request.statusText));
      }
    };
    request.send();
  });
  return promise;
}

var imagePromise = getMyPromise('Image1.jpg')

imagePromise.then((response) => { console.log(response); })
  .catch((error) => { console.log(error); })
  .finally(() => { console.log('Request Done'); })
  ;

/*
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });
  let result = await promise;

  // wait until the promise resolves (*) 
  alert(result);
  // "done!" 
}
f();
*/