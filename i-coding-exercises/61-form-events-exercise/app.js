// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const productInput = document.querySelector("#product");
const qtyInput = document.querySelector("#qty");
const productList = document.querySelector("#list");

function addProductAndQuantityToList(product, qty, list) {
    const newProduct = document.createElement("li");
    newProduct.innerText = `${product.value} ${qty.value}`;
    list.appendChild(newProduct);  // list.append(newProduct); is better to be used, newer syntax
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addProductAndQuantityToList(productInput, qtyInput, productList);
    productInput.value = "";
    qtyInput.value = "";
});
