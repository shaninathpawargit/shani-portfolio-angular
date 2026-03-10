import { Component, inject, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="nav" [class.scrolled]="store.navScrolled()">
      <div class="container nav-inner">
        <a href="#home" class="nav-logo">SP<span class="dot">.</span></a>

        <ul class="nav-links" [class.open]="store.mobileMenuOpen()">
          <li *ngFor="let link of navLinks">
            <a [href]="link.href" (click)="store.closeMobileMenu()">{{ link.label }}</a>
          </li>
        </ul>

        <div class="nav-right">
          <div class="nav-status" *ngIf="store.personal().available">
            <span class="pulse-dot"></span>Available
          </div>
          <button class="hamburger" (click)="store.toggleMobileMenu()" aria-label="Menu">
            <span [class.open]="store.mobileMenuOpen()"></span>
            <span [class.open]="store.mobileMenuOpen()"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 500; padding: 22px 0;
      transition: all .3s ease;
    }
    .nav.scrolled {
      padding: 14px 0;
      background: rgba(7,9,15,.85);
      backdrop-filter: blur(24px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      display: flex; align-items: center; justify-content: space-between;
    }
    .nav-logo {
      font-family: var(--font-display); font-weight: 800; font-size: 1.15rem;
      letter-spacing: -.02em; color: var(--text); transition: var(--transition);
    }
    .nav-logo:hover { color: var(--accent); }
    .dot { color: var(--accent); }
    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a {
      font-size: .68rem; letter-spacing: .12em; text-transform: uppercase;
      color: var(--muted); transition: var(--transition); position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
      height: 1px; background: var(--accent);
      transform: scaleX(0); transform-origin: left; transition: transform .25s;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-links a:hover::after { transform: scaleX(1); }
    .nav-right { display: flex; align-items: center; gap: 20px; }
    .nav-status {
      display: flex; align-items: center; gap: 8px;
      font-size: .65rem; color: var(--teal); letter-spacing: .1em; text-transform: uppercase;
    }
    .pulse-dot {
      width: 7px; height: 7px; background: var(--teal); border-radius: 50%; display: inline-block;
      animation: pulsate 2s infinite;
    }
    @keyframes pulsate {
      0%,100% { box-shadow: 0 0 0 0 rgba(45,226,197,.4); }
      50%      { box-shadow: 0 0 0 5px rgba(45,226,197,0); }
    }
    .hamburger { display: none; flex-direction: column; gap: 5px; padding: 4px; background: none; border: none; }
    .hamburger span {
      display: block; width: 22px; height: 1.5px; background: var(--text);
      border-radius: 2px; transition: var(--transition);
    }
    .hamburger span.open:first-child  { transform: translateY(6.5px) rotate(45deg); }
    .hamburger span.open:last-child   { transform: translateY(-6.5px) rotate(-45deg); }
    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(7,9,15,.97); flex-direction: column;
        align-items: center; justify-content: center; gap: 40px;
        transform: translateY(-100%); transition: transform .35s cubic-bezier(.4,0,.2,1);
        z-index: 490;
      }
      .nav-links.open { transform: translateY(0); }
      .nav-links a { font-size: 1.2rem; }
      .nav-status { display: none; }
    }
  `]
})
export class NavComponent {
  store = inject(PortfolioStore);

  navLinks = [
    { href: '#skills',     label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects',   label: 'Projects' },
    { href: '#awards',     label: 'Awards' },
    { href: '#contact',    label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.store.setNavScrolled(window.scrollY > 40);
  }
}
