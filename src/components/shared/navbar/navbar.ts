import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  isDropdownOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Reset dropdown when closing mobile menu
    if (!this.isMenuOpen) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    // Only allow dropdown toggle on mobile
    if (window.innerWidth <= 768) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
