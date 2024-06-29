 const products = [
    {
      name: "Aquarium",
      image: "IMG_20240617_204554 (1).jpg",
      description: "Description for product 1.",
      price: "Rs. 8000",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
      name: "Product Name 2",
      image: "image2.jpg",
      description: "Description for product 2.",
      price: "Rs.2000"
      video: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    // Add more products as needed
  ];

  function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productHTML = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>Price: ${product.price}</strong></p>
              ${product.video ? `
                <div class="embed-responsive embed-responsive-16by9 mb-2">
                  <iframe class="embed-responsive-item" src="${product.video}" allowfullscreen></iframe>
                </div>` : ''}
              <button class="btn btn-success" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
          </div>
        </div>
      `;
      productList.insertAdjacentHTML('beforeend', productHTML);
    });
  }

  function addToCart(productName) {
    console.log(`${productName} added to cart!`);
    // Implement add to cart functionality here
  }

  // Initial render of products
  renderProducts();
