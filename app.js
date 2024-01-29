

document.addEventListener('DOMContentLoaded', async () => {
  const apiUrl = 'https://fakestoreapi.com/products?limit=6';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const products = await response.json();

    renderProducts(products);
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  function renderProducts(products) {
    const productContainer = document.getElementById('productContainer');

    products.forEach((product) => {
      const card = createProductCard(product);
      productContainer.appendChild(card);
    });
  }

  function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-container');
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-container');

    imageDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

    contentDiv.innerHTML = `
          <h3>${product.category}</h3>
          <p>🕷️${product.title}</p>
          <p> 🐬${product.description}</p>
          <p>Price: $${product.price}</p>
          <button>Add to Cart</button>
          <p>Ratings: 😎😎 *${product.rating.rate}</p>
          <p>Stock in count: ${product.rating.count} 🛻🚚</p>
      `;

    card.appendChild(imageDiv);
    card.appendChild(contentDiv);

    return card;
  }
});
