// Get all the product cards
const productCards = document.querySelectorAll(".product-card");

// Add a click event listener to each product card
productCards.forEach(card => {
  card.addEventListener("click", function() {
    // Get the product title and price
    const title = card.querySelector("h3").textContent;
    const price = card.querySelector("p").textContent;

    // Display an alert with the product information
    alert(`Product: ${title}\nPrice: ${price}`);
  });
});
