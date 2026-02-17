const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayAllProducts(data));
};

const displayAllProducts = (products) => {
  //   console.log(products);

  const productsContainer = document.getElementById("products-container");
  

  productsContainer.innerHTML = `
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
       

  products.map((product) => {
    // console.log(product);

    // console.log(product.category);

    const allProduct = document.createElement("div");

    allProduct.innerHTML = `
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

    productsContainer.append(allProduct);

    const particularCategoryProducts = (category) => {
        const categoryProduct = products.filter(product => category === product.category);

       const categoryProductDiv = document.createElement("div");
       categoryProductDiv.innerHTML = `
       <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src=${categoryProduct.image}
                class="w-50 h-60"
              />
            </figure>
            <div class="flex items-center justify-between mt-3 px-3">
                <div class="badge badge-soft badge-primary">${categoryProduct.category}</div>
                <p><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i> ${categoryProduct.rating.rate} (${categoryProduct.rating.count})</p>
            </div>
            <div class="card-body">
              <h2 class="card-title">
                ${categoryProduct.title}              
              </h2>
              <p class="text-xl font-bold">
                $${categoryProduct.price}
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-outline w-40"><i class="fa-regular fa-paper-plane"></i>Delivery</button>
                <button class="btn btn-primary w-40"><img src="./Assets/trolley.png" class="w-5 h-5 text-white">Add</button>
              </div>
            </div>
          </div>
       `
    };
  })};

const loadAllCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayAllCategories(data));
};

const displayAllCategories = (categories) => {
  // console.log(categories);

  const categoryAll = ['All', ...categories];
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categoryAll.map((category) => {
    console.log(category);
    const categoryBtn = document.createElement("div");

    //     const allCategoryBtn = document
    //     .createElement("button")
    //     .classList("btn btn-outline px-3 py-2 border-1 rounded-2xl");
    //   allCategoryBtn.innerText = "All";
    //   categoryContainer.appendChild(allCategoryBtn);

    categoryBtn.innerHTML = `
        <button onClick="particularCategoryProducts(${category})" class="btn btn-outline px-3 py-2 border-1 rounded-3xl">
          ${category}
        </button>
        `;

    categoryContainer.append(categoryBtn);
  });
};



loadAllProducts();

loadAllCategory();
