import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isLightTheme: boolean = true;
  public showMobileMenu: boolean = false;
  public showMenu: boolean = false;

  constructor(public router: Router) {}

  toggleNavbar() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark',
    );
  }
}
