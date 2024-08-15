export function discountStyle() {
  const discountDivs = document.querySelectorAll(".product-card--discount");

  discountDivs.forEach((div) => {
    if (div.textContent.trim() !== "") {
      div.classList.add("discount-has-text");
    }
  })
}