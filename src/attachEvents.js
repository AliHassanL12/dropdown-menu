import showDropdown from "./showDropdown";

const attachListeners = function attachEventListeners() {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  dropdownButtons.forEach((dropdownButton) => {
    dropdownButton.addEventListener("click", showDropdown);
  });
};

export default attachListeners;
