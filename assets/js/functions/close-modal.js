export function closeModal() {
  document.getElementById('modal-button').addEventListener('click', function() {
      document.getElementById('modal').style.opacity = '0';
      document.getElementById('modal').style.transition = ' 0.5s ease';
      document.getElementById('modal').style.transform = 'translateY(-100%)';
  }
)}