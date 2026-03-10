import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursorComponent } from './components/cursor/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CursorComponent],
  template: `
    <div class="site-noise" aria-hidden="true"></div>
    <div class="site-grid"  aria-hidden="true"></div>
    <div class="glow-top"   aria-hidden="true"></div>
    <div class="glow-bottom"aria-hidden="true"></div>
    <app-cursor />
    <app-nav />
    <router-outlet />
    <app-footer />
  `
})
export class AppComponent {}
