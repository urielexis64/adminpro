import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const localTheme =
      localStorage.getItem('theme') || 'assets/css/colors/default-dark.css';

    this.linkTheme.setAttribute('href', localTheme);
  }

  changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');

    links.forEach((element) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const themeURL = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if (themeURL === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
