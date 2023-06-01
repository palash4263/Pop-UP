// Attach event listeners to the buttons
 var addToCartButtons = document.querySelectorAll('.add-to-cart');

 
function togglePopup(){
    console.log("working");
    document.getElementById("popup-1").classList.toggle("active");
}


addToCartButtons.forEach(function(button) {
    
  button.addEventListener('click', function(event) {
    var productBox = button.closest('.product');
    var productName = productBox.querySelector('.product-name').textContent;
    var productTitle = productName.trim();

    // Perform the "Add to Cart" action
    // Implement your logic here

    // Show success message
    var successMessage = `Successfully added ${productTitle} to cart`;
    alert(successMessage);

    // Close the pop-up
    var popup = button.closest('.popup');
    if (popup) {
      document.body.removeChild(popup);
    }
  });
});
