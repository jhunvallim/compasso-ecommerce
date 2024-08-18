export function closeDiscountModal() {
  document.getElementById('modal-button').addEventListener('click', function() {
      const modal = document.getElementById('modal');
      modal.style.opacity = '0';
      modal.style.transition = ' 0.5s ease';
      modal.style.transform = 'translateY(-100%)';
  }
)}