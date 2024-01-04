let helloPromise = new Promise((resolve, reject) => {
    let condition = false;

    if (condition) {
        resolve("Hello");
    } else {
        reject("Error occured");
    }
})

// helloPromise.then(message => { console.log(message)}).catch(error => {
//     console.error(error);
// })

async function handlePromise() {
    try {
        let message = await helloPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

handlePromise();