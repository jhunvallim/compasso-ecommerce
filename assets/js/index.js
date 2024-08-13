const discount = document.querySelectorAll('.product-card--discount');

discount.forEach(div => {
  if (div.textContent.trim() !== '') {
    div.classList.add('discount-has-text');
  }
});
