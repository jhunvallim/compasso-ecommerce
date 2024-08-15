

// Comment Slider
export function commentsCarousel() {
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
let cardArea = document.querySelector(".card-area");


const scrollAmount = 420;

arrowLeft.addEventListener('click', (event) => {
  event.preventDefault();
  const currentPosition = cardArea.scrollLeft;
  const targetPosition = currentPosition - scrollAmount;
  cardArea.scrollTo({
    left: targetPosition,
    behavior: 'smooth'
  });
});

 arrowRight.addEventListener('click', (event) => {
  //  event.preventDefault();
   const currentPosition = cardArea.scrollLeft;
   const targetPosition = currentPosition + scrollAmount;
   const scrollableWidth = cardArea.scrollWidth - cardArea.clientWidth;

   if (targetPosition > scrollableWidth) {
    //Volta ao início
    //  cardArea.scrollTo({
    //    left: 0,
    //    behavior: 'smooth'
    //  });
    const animationDuration = 500; 
    const easeType = 'ease'; // Função de easing (pode ser 'ease-in', 'ease-out', etc.)

    cardArea.scrollTo({
      left: 0,
      behavior: 'smooth'
    });

    // Transição
    cardArea.style.transition = `transform ${animationDuration}ms ${easeType}`;
    cardArea.style.transform = 'rotateY(360deg)';

    // Limpa transição
    setTimeout(() => {
      cardArea.style.transition = '';
      cardArea.style.transform = '';
    }, animationDuration * 2);
   } else {
     cardArea.scrollTo({
       left: targetPosition,
       behavior: 'smooth'
     });
   }
 });
}

// arrowRight.addEventListener('click', (event) => {
//   event.preventDefault();
//   const currentPosition = cardArea.scrollLeft;
//   const targetPosition = currentPosition + scrollAmount;
//   const scrollableWidth = cardArea.scrollWidth - cardArea.clientWidth;

//   if (targetPosition > scrollableWidth) {
//     // Voltar ao início com efeito de carrossel
//     const animationDuration = 1000; // Duração da animação em milissegundos
//     const easeType = 'ease-out'; // Função de easing (pode ser 'ease-in', 'ease-out', etc.)

//     cardArea.scrollTo({
//       left: 0,
//       behavior: 'smooth'
//     });

//     // Adicionar a transição suave
//     cardArea.style.transition = `transform ${animationDuration}ms ${easeType}`;
//     cardArea.style.transform = 'rotate3d(1, 2, 100, 360deg)';

//     // Limpar a transição após a animação
//     setTimeout(() => {
//       cardArea.style.transition = '';
//       cardArea.style.transform = '';
//     }, animationDuration);
//   } else {
//     cardArea.scrollTo({
//       left: targetPosition,
//       behavior: 'smooth'
//     });
//   }
// });


let teste = document.querySelectorAll('.card-container');
console.log(teste);


// arrowRight.addEventListener("click", function() {
//   var divs = document.querySelectorAll(".card-container");
//   if (divs.length > 1) {
//     var firstDiv = divs[0];
//     var lastDiv = divs[divs.length - 1];
//     lastDiv.parentNode.insertBefore(firstDiv, lastDiv.nextSibling);
//   }
// });