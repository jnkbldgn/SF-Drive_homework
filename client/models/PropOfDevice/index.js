export default class PropOfDevice {
  constructor(desktop, mobile, breakpoint) {
    this.desktop = desktop;
    this.mobile = mobile;
    this.breakpoint = breakpoint;
  }

  getValue() {
    if (typeof window === 'undefined') {
      return 0;
    }

    const { width } = window.screen;
    const value = width < this.breakpoint ? this.mobile : this.desktop;

    return value;
  }
}
