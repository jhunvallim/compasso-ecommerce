//Imports
import { discountStyle } from "./functions/discount-style.js";
import { closeDiscountModal } from "./functions/close-discount-modal.js";
import { commentsCarousel } from "./functions/comments-carousel.js";
import { commentClone } from "./functions/comments-carousel.js";
import { cloneDiv } from "./functions/products-clone.js";

//Run imports
document.addEventListener("DOMContentLoaded", discountStyle());
document.addEventListener("DOMContentLoaded", closeDiscountModal());
document.addEventListener("DOMContentLoaded", commentClone());
document.addEventListener("DOMContentLoaded", commentsCarousel());
document.addEventListener("DOMContentLoaded", cloneDiv());

