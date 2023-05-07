const form = document.querySelector(".product__items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const productName = form.productName.value;
  const productPrice = form.productPrice.value;
  const productQuantity = form.productQuantity.value;
  const productBrand = form.productBrand.value.split(",");
  const productColor = form.productColor.value.toLowerCase().trim().split(",");
  const productSize = form.productSize.value.toUpperCase().trim().split(",");
  const productType = form.productType.value;
  const productImage = form.productImage.files[0].name;
  const id = Date.now();

  const newProduct = {
    id,
    name: productName,
    price: parseInt(productPrice),
    quantity: parseInt(productQuantity),
    brand: productBrand,
    image: `./images/${productImage}`,
    nature: {
      color: productColor,
      size: productSize,
      type: productType
    }
  };

  fetch("http://localhost:3000/shop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  }).then(() => {
    alert("Product added successfully!");
    form.reset();
  }).catch((err) => {
    console.error(err);
  });
});