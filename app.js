// Array to store product data
let products = [];

// Function to add a new product
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    if (!name || isNaN(price) || isNaN(rating) || rating < 1 || rating > 5) {
        alert('Please enter valid product details. Rating should be between 1 and 5.');
        return;
    }

    products.push({ name, price, rating });

    // Clear the input fields
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';

    // Update the graphs
    updateGraphs();
}

// Function to display the price and rating bar graphs
function updateGraphs() {
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');

    // Clear previous graphs
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    // Display bars for price
    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = product.price * 5 + 'px';  // Adjust width to scale
        priceBar.textContent = `${product.name}: $${product.price}`;
        priceGraph.appendChild(priceBar);
    });

    // Display bars for rating
    products.forEach(product => {
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.width = product.rating * 50 + 'px';  // Adjust width to scale
        ratingBar.textContent = `${product.name}: ${product.rating}/5`;
        ratingGraph.appendChild(ratingBar);
    });
}

// Function to sort by price
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

// Function to sort by rating
function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}

// Event listeners
document.getElementById('add-product').addEventListener('click', addProduct);
document.getElementById('sort-price').addEventListener('click', sortByPrice);
document.getElementById('sort-rating').addEventListener('click', sortByRating);
