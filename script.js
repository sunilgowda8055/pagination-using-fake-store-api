const token = localStorage.getItem('token')
if (!token) {
  window.location.href = './login.html'
}

async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    renderProducts(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()

function renderProducts(products) {
  const productList = document.getElementById('product-list')

  products.forEach((product) => {
    const card = createProductCard(product)
    productList.appendChild(card)
  })
}

function createProductCard(product) {
  const card = document.createElement('div')
  card.classList.add('card')

  const title = document.createElement('h3')
  title.textContent = product.title

  const price = document.createElement('p')
  price.textContent = `$${product.price.toFixed(2)}`

  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.title
  image.classList.add('product-image')

  const ratings = document.createElement('p')
  ratings.textContent = `Ratings: ${product.rating.rate} (${product.rating.count} reviews)`

  const viewDetailsButton = document.createElement('button')
  viewDetailsButton.classList.add('button')
  viewDetailsButton.textContent = 'View Details'
  viewDetailsButton.addEventListener('click', () => {
    // Redirect to details page with product ID
    window.location.href = `details.html?id=${product.id}`
  })

  card.appendChild(title)
  card.appendChild(price)
  card.appendChild(image)
  card.appendChild(ratings)
  card.appendChild(viewDetailsButton)

  return card
}





