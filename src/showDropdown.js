const showDropdown = function expandDropdownContent(event) {
  const button = event.target;
  const divClassList = button.nextElementSibling.classList;
  const isVisible = divClassList.contains("visible");
  if (!isVisible) divClassList.replace("hidden", "visible");
  else divClassList.replace("visible", "hidden");
};

export default showDropdown;
