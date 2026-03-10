import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-pad" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-num">// 01</span>
          <h2 class="section-title">Skills</h2>
          <div class="section-rule"></div>
        </div>
        <div class="skills-grid">
          <div class="skill-card card"
               *ngFor="let cat of store.skills(); let i = index"
               [style.animation-delay]="i * 0.08 + 's'">
            <div class="skill-header">
              <span class="skill-icon">{{ cat.icon }}</span>
              <span class="skill-cat">{{ cat.category }}</span>
            </div>
            <div class="skill-items">
              <span class="skill-pill" *ngFor="let item of cat.items">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 18px;
    }
    .skill-card {
      display: flex; flex-direction: column; gap: 18px;
      animation: fadeUp .5s ease both; cursor: default;
    }
    .skill-card:hover { transform: translateY(-5px); }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .skill-header { display: flex; align-items: center; gap: 10px; }
    .skill-icon { font-size: 1.1rem; color: var(--teal); width: 28px; text-align: center; }
    .skill-cat {
      font-family: var(--font-display); font-weight: 700; font-size: .72rem;
      text-transform: uppercase; letter-spacing: .12em; color: var(--teal);
    }
    .skill-items { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-pill {
      padding: 5px 12px; background: var(--surface2);
      border: 1px solid var(--border); border-radius: var(--radius-sm);
      font-size: .65rem; color: var(--text-dim); transition: var(--transition);
    }
    .skill-card:hover .skill-pill { border-color: rgba(91,138,255,.25); color: var(--text); }
  `]
})
export class SkillsComponent {
  store = inject(PortfolioStore);
}
