function resolveAfter(seconds, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(value);
        resolve(value);
      }, seconds * 1000);
    });
  }
  
async function waitForAll() {
  const results = await Promise.all([
    resolveAfter(1, "one"),
    resolveAfter(2, "two"),
    resolveAfter(3, "three"),
  ]);

  return results;
}

waitForAll();
