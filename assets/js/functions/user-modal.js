function userModal() {
  const userButton = document.querySelector('.nav-user');
  const userModal = document.querySelector('#user-modal');
  
  userButton.addEventListener('click', () => {
    userModal.show();
  });
  
  userModal.addEventListener('mouseleave', () => {
    userModal.close();
  });
  }

function userValidation() {
    const userForm = document.getElementById('user-form');
    const userName = document.getElementById('user-name');
    const userPassword = document.getElementById('user-password');


userForm.addEventListener('submit', (event) => {
  if (userName.value.trim() === '' || userPassword.value.trim() === '') {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.');
  }
});
  }

  export { userModal, userValidation };