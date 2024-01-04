function resolveAfter(seconds, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
    //   console.log(value);
      resolve(value);
    }, seconds * 1000);
  });
}

function rejectAfter(seconds, reason) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason);
    }, seconds * 1000);
  });
}

async function waitForAllWithCatch() {
  try {
    const results = await Promise.all([
      resolveAfter(1, "one"),
      rejectAfter(2, "error"), // This promise will reject
      resolveAfter(3, "three"),
    ]);
    console.log(results);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

waitForAllWithCatch();
