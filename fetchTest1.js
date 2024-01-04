// fetch test from jsonplaceholder

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP errro ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

fetchData();