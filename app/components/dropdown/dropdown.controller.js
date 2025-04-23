export default class DropdownController {
  constructor() {
    this.isOpen = false;
  }

  toggleDropdown(event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  selectOption(option) {
    this.selected = option;
    this.isOpen = false;
  }

  handleClickOutside() {
    this.isOpen = false;
  }

  $onInit() {
    // Bind methods to preserve 'this' context
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  }

  $onDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
