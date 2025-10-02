const productContainer = document.querySelector("#productContainer");

console.log(productContainer);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("mit id fra url'en" + id);


fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then(data => showProduct(data))

function showProduct(product){

    productContainer.innerHTML = `

<article class="productCard">
  <figure class="productImageWrapper">
    <img 
      src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" 
      alt="Produktbillede af ${product.productdisplayname}" 
      class="productImage" 
    />
    <span class="saleLabel">Udsalg!</span>
  </figure>

  <section class="productDetails">
    <h2 class="productName">${product.productdisplayname}</h2>
    <p class="articleType">
      <span class="bold">Type:</span> ${product.articletype}
    </p>
    <p class="productCategory">
      <span class="bold">Kategori:</span> Accessories
    </p>
    <p class="price">
      <span class="bold">Pris:</span> ${product.price},-
    </p>
    <button class="buyButton">Køb nu</button>
  </section>
</article>

 `;
}
