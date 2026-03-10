import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-pad awards-section" id="awards">
      <div class="container">
        <div class="section-header">
          <span class="section-num">// 04</span>
          <h2 class="section-title">Awards</h2>
          <div class="section-rule"></div>
        </div>
        <div class="awards-grid">
          <div class="award-card card"
               *ngFor="let a of store.awards(); let i = index"
               [style.animation-delay]="i * 0.09 + 's'">
            <div class="award-icon">{{ a.icon }}</div>
            <div class="award-year tag">{{ a.year }}</div>
            <div class="award-name">{{ a.name }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .awards-section {
      background: var(--bg2);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .awards-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 18px;
    }
    .award-card {
      display: flex; flex-direction: column; align-items: center;
      text-align: center; gap: 12px; padding: 32px 20px; cursor: default;
      animation: fadeUp .5s ease both;
    }
    .award-card:hover { transform: translateY(-5px); border-color: var(--accent); }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .award-icon { font-size: 2.2rem; }
    .award-year { font-size: .58rem; }
    .award-name {
      font-family: var(--font-display); font-weight: 700; font-size: .82rem; line-height: 1.4;
    }
  `]
})
export class AwardsComponent {
  store = inject(PortfolioStore);
}
