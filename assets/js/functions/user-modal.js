function userModal() {
  const userModal = document.querySelector("#user-modal");
  if (userModal) {
  const userButton = document.querySelector(".nav-user");

  userButton.addEventListener("click", () => {
    userModal.show();
  });

  userModal.addEventListener("mouseleave", () => {
    userModal.close();
  });

  userModal.addEventListener('focusout', () => {
    userModal.close();
  });
}
}

function userValidation() {
  const userForm = document.getElementById("user-form");
  if (userForm) {
  const userName = document.getElementById("user-name");
  const userPassword = document.getElementById("user-password");

  userForm.addEventListener("submit", (event) => {
    if (userName.value.trim() === "" || userPassword.value.trim() === "") {
      event.preventDefault();
      alert("Por favor, preencha todos os campos.");
    }
  });
}
}

export { userModal, userValidation };