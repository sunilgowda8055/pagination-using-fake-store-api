async function fetchProductDetails() {
    try {
        // Extract product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (!productId) {
            throw new Error('Product ID not found in URL');
        }

        // Fetch data for the specific product
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const product = await response.json();

        if (!product) {
            throw new Error('Product data not found');
        }

        renderProductDetails(product);
    } catch (error) {
        console.error('Error fetching or rendering product details:', error);
    }
}

fetchProductDetails();

function renderProductDetails(product) {
    const productDetailsContainer = document.getElementById('product-details');

    if (!productDetailsContainer) {
        console.error('Product details container not found');
        return;
    }

    const card = createProductCard(product);
    productDetailsContainer.appendChild(card);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.classList.add('product-image');

    const ratings = document.createElement('p');
    ratings.textContent = `Ratings: ${product.rating.rate} (${product.rating.count} reviews)`;

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(image);
    card.appendChild(ratings);

    return card;
}


function logout(){

    localStorage.removeItem('token');


    window.location.href='./login.html'
}