async function fetchAndDisplayProducts() {
    try {
        const response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
        const data = await response.json();
        const products = Object.values(data.products);
        const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

        // Now, display these products on your webpage
        // You'll have to write code to modify the DOM to display these products
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);
