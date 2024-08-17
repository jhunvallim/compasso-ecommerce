//Imports
import { discountStyle } from "./functions/discount-style.js";
import { closeDiscountModal } from "./functions/close-discount-modal.js";
import { commentsCarousel } from "./functions/comments-carousel.js";
import { commentClone } from "./functions/comments-carousel.js";
import { cloneDiv } from "./functions/products-clone.js";
import { shopDropdown } from "./functions/nav-modal.js";
import { userModal, userValidation } from "./functions/user-modal.js";

//Run imports

document.addEventListener("DOMContentLoaded", () => {
  discountStyle();
  closeDiscountModal();
  commentClone();
  commentsCarousel();
  cloneDiv();
  shopDropdown();
  userModal();
  userValidation();
});

