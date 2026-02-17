const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayAllProducts(data));
};

const displayAllProducts = (products) => {
  //   console.log(products);

  const trendingProductsContainer = document.getElementById(
    "trending-products-container",
  );
  trendingProductsContainer.innerHTML = "";

  products.map((product) => {
    // console.log(product);

    // console.log(product.category);

    const trendingProduct = document.createElement("div");

    trendingProduct.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src=${product.image}
                class="w-50 h-60"
              />
            </figure>
            <div class="flex items-center justify-between mt-3 px-3">
                <div class="badge badge-soft badge-primary">${product.category}</div>
                <p><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i> ${product.rating.rate} (${product.rating.count})</p>
            </div>
            <div class="card-body">
              <h2 class="card-title">
                ${product.title}              
              </h2>
              <p class="text-xl font-bold">
                $${product.price}
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-outline w-40"><i class="fa-regular fa-paper-plane"></i>Delivery</button>
                <button class="btn btn-primary w-40"><img src="./Assets/trolley.png" class="w-5 h-5 text-white">Add</button>
              </div>
            </div>
          </div>
        `;

    trendingProductsContainer.append(trendingProduct);
  });
};

const loadProductDetails = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductDetails(data));
};

const displayProductDetails = (details) => {
  // console.log(details);

  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = "";

  details.map((detail) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
        <img src=${detail.image} alt="" />
      </div>
      <div>
        <h2>${detail.title}</h2>
        <p>${detail.description}</p>
        <p>Category: ${detail.category}</p>
        <button
          onClick="loadProductDetails(${detail.id})" class="btn btn-outline w-40"
        >
          <i class="fa-regular fa-paper-plane"></i>Delivery
        </button>
        <button class="btn btn-primary w-40">
          <img src="./Assets/trolley.png" class="w-5 h-5 text-white" />Add
        </button>
      </div>
    `;

    detailsContainer.append(div);
  });
};



loadAllProducts();

loadAllCategory();
