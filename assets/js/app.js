//Imports
import { renderHeader } from "./components/header.js";
import { discountStyle } from "./functions/discount-style.js";
import { closeDiscountModal } from "./functions/close-discount-modal.js";
import { commentsCarousel } from "./functions/comments-carousel.js";
import { commentClone } from "./functions/comments-carousel.js";
import { cloneDiv } from "./functions/products-clone.js";
import { nav390, shopDropdown } from "./functions/nav-modal.js";
import { userModal, userValidation } from "./functions/user-modal.js";


// // Run renders
renderHeader();

//Run imports

document.addEventListener("DOMContentLoaded", () => {  
  discountStyle();
  closeDiscountModal();
  commentClone();
  commentsCarousel();
  cloneDiv();
  shopDropdown();
  userModal();
  nav390();
  userValidation();
});

