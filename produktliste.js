const productListContainer = document.querySelector(".gallery");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);

    productListContainer.innerHTML += `
      
        <a href="produkt.html?id=${element.id}" class="box">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="tshirt">
          <span class="discount">-34%</span>
          <h1>Sahara Team India Fawner Round Neck Jersey</h1>
          <p>Tshirts i Nike</p>
          <p>DKK 1595,-</p>
          <p class="read-more">Read More</p>
        </a>`;
  });
}
