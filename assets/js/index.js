

// Comment Slider

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
let firstCard = document.querySelector(".card-area");


const scrollAmount = 400;

arrowLeft.addEventListener('click', (event) => {
  event.preventDefault();
  const currentPosition = firstCard.scrollLeft;
  const targetPosition = currentPosition - scrollAmount;
  firstCard.scrollTo({
    left: targetPosition,
    behavior: 'smooth'
  });
});

 arrowRight.addEventListener('click', (event) => {
   event.preventDefault();
   const currentPosition = firstCard.scrollLeft;
   const targetPosition = currentPosition + scrollAmount;
   const scrollableWidth = firstCard.scrollWidth - firstCard.clientWidth;

   if (targetPosition > scrollableWidth) {
      // Volta ao início ao atingir o limite
     firstCard.scrollTo({
       left: 0,
       behavior: 'smooth'
     });
   } else {
     firstCard.scrollTo({
       left: targetPosition,
       behavior: 'smooth'
     });
   }
 });

// arrowRight.addEventListener('click', (event) => {
//   event.preventDefault();
//   const currentPosition = firstCard.scrollLeft;
//   const targetPosition = currentPosition + scrollAmount;
//   const scrollableWidth = firstCard.scrollWidth - firstCard.clientWidth;

//   if (targetPosition > scrollableWidth) {
//     // Voltar ao início com efeito de carrossel
//     const animationDuration = 1000; // Duração da animação em milissegundos
//     const easingFunction = 'ease-out'; // Função de easing (pode ser 'ease-in', 'ease-out', etc.)

//     firstCard.scrollTo({
//       left: 0,
//       behavior: 'smooth'
//     });

//     // Adicionar a transição suave
//     firstCard.style.transition = `transform ${animationDuration}ms ${easingFunction}`;
//     firstCard.style.transform = 'rotate3d(1, 2, 100, 360deg)';

//     // Limpar a transição após a animação
//     setTimeout(() => {
//       firstCard.style.transition = '';
//       firstCard.style.transform = '';
//     }, animationDuration);
//   } else {
//     firstCard.scrollTo({
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