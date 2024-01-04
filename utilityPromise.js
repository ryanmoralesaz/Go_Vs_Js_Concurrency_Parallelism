function makeInspectable(promise) {
    let state = 'pending';
    let result;

    const inspectablePromise = promise.then(
        value => {
            state = 'fulfilled';
            result = value;
            return value;
        },
        error => {
            state = 'rejected';
            result = error;
            throw error;
        }
    );

    inspectablePromise.getState = () => state;
    inspectablePromise.getResult = () => result;

    return inspectablePromise;
}

// Example usage
const myPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'success'); // resolves after 1 second
});

const inspectable = makeInspectable(myPromise);

setTimeout(() => console.log(inspectable.getState()), 500); // logs "pending"
setTimeout(() => console.log(inspectable.getState()), 1500); // logs "fulfilled"
