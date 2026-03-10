import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="footer-logo">SP<span class="dot">.</span></span>
          <span class="footer-sub">Shaninath Pawar · Pune, India</span>
        </div>
        <span class="footer-copy">Built with Angular 19 + NgRx Signals · {{ year }}</span>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/shaninath-pawar-0b95b5189/" target="_blank">LinkedIn</a>
          <a href="https://github.com/shaninathpawargit" target="_blank">GitHub</a>
          <a href="mailto:shaninathpawar.jobs@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { border-top: 1px solid var(--border); padding: 36px 0; position: relative; z-index: 1; }
    .footer-inner {
      display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
    }
    .footer-brand { display: flex; align-items: center; gap: 12px; }
    .footer-logo { font-family: var(--font-display); font-weight: 800; font-size: 1rem; }
    .dot { color: var(--accent); }
    .footer-sub { font-size: .65rem; color: var(--muted); letter-spacing: .05em; }
    .footer-copy { font-size: .65rem; color: var(--muted); }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a {
      font-size: .65rem; letter-spacing: .1em; text-transform: uppercase;
      color: var(--muted); text-decoration: none; transition: all .25s;
    }
    .footer-links a:hover { color: var(--teal); }
    @media (max-width: 600px) {
      .footer-inner { flex-direction: column; text-align: center; }
      .footer-links { justify-content: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
