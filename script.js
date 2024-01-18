async function fetchAndDisplayProducts() {
    try {
        const response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
        const data = await response.json();
        const products = Object.values(data.products);
        const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

        const productListElement = document.getElementById('product-list');
        productListElement.innerHTML = ''; // Clear existing content

        sortedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h2>${product.title}</h2>
                <p>Price: <span class="product-price">${product.price}</span></p>
            `;
            productListElement.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('product-list').innerHTML = '<p>Error loading products.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);
