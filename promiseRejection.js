function rejectAfter(seconds, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(value);
        reject(value);
      }, seconds * 1000);
    });
  }
  
  Promise.all([
    rejectAfter(1, "one"),
    rejectAfter(2, "two"),
    rejectAfter(3, "three"),
  ]).then((results) => {
    console.log(results);
  }).catch(error => {
    console.error('caught an error', error);
  })
  