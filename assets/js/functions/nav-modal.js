function shopDropdown() {
  const navDropdown = document.querySelector(".nav-dropdown");
  if (navDropdown) {
    const navDropdownButton = document.querySelector(".nav-dropdown-button");
    const dropdownArrow = document.querySelector(".dropdown-arrow");
    navDropdownButton.addEventListener("click", () => {
      navDropdown.show();
      navDropdown.style.opacity = "1";
      dropdownArrow.style.transform = "rotateX(180deg)";
    });
    navDropdown.addEventListener("mouseleave", () => {
      navDropdown.close();
      navDropdown.style.opacity = "0";
      dropdownArrow.style.transform = "rotateX(0deg)";
    });
  }
}

function nav390() {
  const nav390 = document.querySelector("#nav-390");
  if (nav390) {
    const nav390Button = document.querySelector("#nav-390-button");

    nav390Button.addEventListener("click", () => {
      nav390.show();
      nav390.style.opacity = "1";
      nav390.style.transform = "translateX(100px)";
      
    });

    nav390.addEventListener('focusout', () => {
      nav390.close();
      nav390.style.opacity = "0";
      nav390.style.transform = "translateX(-100px)";
      
    });
  }
}

export { shopDropdown, nav390 };