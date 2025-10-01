const productContainer = document.querySelector("#productContainer");

console.log(productContainer);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("mit id fra url'en" + id);

fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((res) => res.json())
  .then((product) => {
    //console.log(product.articletype);

    productContainer.innerHTML = `

    <figure>
      <img 
        src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
        alt="Produktbillede" 
        class="productImage" 
      />
      <span class="saleLabel">Udsalg!</span>
    </figure>

    <section class="productDetails">
      <h2 class="productName">Produktnavn</h2>
      <div>
        <p class="articleType">
          <span class="bold">Type:</span> ${product.articletype}
        </p>
        <p class="productCategory">
          <span class="bold">Kategori:</span> Accessories
        </p>
        <p class="price">
          <span class="bold">Pris:</span> ${product.price}
        </p>
      </div>
      <button class="buyButton">Køb nu</button>
    </section>
 `;
});
