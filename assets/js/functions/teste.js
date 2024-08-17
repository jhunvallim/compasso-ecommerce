function shopDropdown() {
  const navDropdown = document.querySelector('.nav-dropdown');
  const navDropdownButton = document.querySelector('.nav-dropdown-button');
  const dropdownArrow = document.querySelector('.dropdown-arrow');

  navDropdownButton.addEventListener('click', () => {
    navDropdown.show();
    navDropdown.style.opacity = '1';
    dropdownArrow.style.transform = 'rotateX(180deg)';
  });
  navDropdown.addEventListener('mouseleave', () => {
    navDropdown.close();
    navDropdown.style.opacity = '0';
    dropdownArrow.style.transform = 'rotateX(0deg)';
  });
}

shopDropdown();