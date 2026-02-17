const loadAllProducts = (category) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        if (category === "all") {
    displayProducts(data);
  } else {
    const categoryProduct = data.filter(
      (product) => product.category === category,
    );

    displayProducts(categoryProduct);
  }
    });
};

const loadAllCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayAllCategories(data));
};

const displayAllCategories = (categories) => {
  const categoryAll = ["all", ...categories];
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categoryAll.forEach((category) => {
    const categoryBtn = document.createElement("button");

    categoryBtn.className = "btn btn-outline px-3 py-2 border-1 rounded-3xl";
    categoryBtn.innerText = category;
    categoryBtn.addEventListener('click', () => loadAllCategory(category))

    // categoryBtn.innerHTML = `
    //     <button onClick="loadAllProducts("${category}")" class="btn btn-outline px-3 py-2 border-1 rounded-3xl">
    //       ${category}
    //     </button>
    //     `;

    categoryContainer.append(categoryBtn);
  });
};

const displayProducts = (products) => {

  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    console.log(product.category);
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
  });
};

loadAllCategory();

//     const allCategoryBtn = document
//     .createElement("button")
//     .classList("btn btn-outline px-3 py-2 border-1 rounded-2xl");
//   allCategoryBtn.innerText = "All";
//   categoryContainer.appendChild(allCategoryBtn);
