//Comment Clone
function commentClone() {
  const cardContainer = document.querySelector(".card-area");
  const firstCard = cardContainer.firstElementChild;
  const clone = firstCard.cloneNode(true); 
  clone.style.marginLeft = "0px";
  clone.classList.add("copy-card");
  cardContainer.appendChild(clone);
}

// Comment Slider
function commentsCarousel() {
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");
  const cardArea = document.querySelector(".card-area");

  const scrollAmount = 420;
  
      const animationDuration = 500;
      const easeType = "ease-in-out"; 

  arrowLeft.addEventListener("click", (event) => {
    event.preventDefault();
    const currentPosition = cardArea.scrollLeft;
    const targetPosition = currentPosition - scrollAmount - 20;
    if (currentPosition === 0) {
      //Avança até o final
      cardArea.scrollTo({
        left: 850,
        behavior: "smooth" 
      })
      cardArea.style.transition = `all ${animationDuration}ms ${easeType}`;
      
      cardArea.style.transform = "rotateY(-360deg)";
      cardArea.style.opacity = "0";
      setTimeout(() => {
        cardArea.style.opacity = 1;
      
        // Limpa transição
        setTimeout(() => {
          cardArea.style.transition = "";
          cardArea.style.transform = "";
        }, animationDuration);
      }, 200);
    } else {
    cardArea.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });}
  });

  arrowRight.addEventListener("click", (event) => {
     event.preventDefault();
     
    const currentPosition = cardArea.scrollLeft;
    const targetPosition = currentPosition + scrollAmount;
    const scrollableWidth = cardArea.scrollWidth - cardArea.clientWidth;

    if (targetPosition > scrollableWidth) {
      //Volta ao início

      cardArea.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      // Transição
      cardArea.style.transition = `all ${animationDuration}ms ${easeType}`;
      
      cardArea.style.transform = "rotateY(-360deg)";
      cardArea.style.opacity = "0";
      setTimeout(() => {
        cardArea.style.opacity = 1;
      
        // Limpa transição 
        setTimeout(() => {
          cardArea.style.transition = "";
          cardArea.style.transform = "";
        }, animationDuration);
      }, 200);
    } else {
      cardArea.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  });
}

export { commentClone, commentsCarousel };