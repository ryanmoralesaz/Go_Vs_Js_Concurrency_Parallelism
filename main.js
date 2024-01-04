console.log("hello");

async function printNumbers(name, count) {
    for (let i = 0; i < count; i++) {
        console.log(`${name}: ${i}`);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function main() {
    await Promise.all([
        printNumbers("Async1", 5),
        printNumbers("Async2", 5)
    ])
}

main();