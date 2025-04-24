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
    this.change();
    this.isOpen = false;
  }

  $onInit() {
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }
}
