import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section-pad" id="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-num">// 03</span>
          <h2 class="section-title">Projects</h2>
          <div class="section-rule"></div>
        </div>

        <div class="featured-grid">
          <div class="project-card featured card"
               *ngFor="let p of store.featuredProjects(); let i = index"
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="card-bar"></div>
            <div class="project-meta">
              <span class="tag">{{ p.client }}</span>
              <span class="period">{{ p.period }}</span>
            </div>
            <h3 class="project-name">{{ p.name }}</h3>
            <p class="project-desc">{{ p.desc }}</p>
            <div class="project-stack">
              <span class="tag muted" *ngFor="let t of p.stack">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="other-grid">
          <div class="project-card card"
               *ngFor="let p of store.otherProjects(); let i = index"
               [style.animation-delay]="(i + 2) * 0.1 + 's'">
            <div class="card-bar"></div>
            <div class="project-meta">
              <span class="tag">{{ p.client }}</span>
              <span class="period">{{ p.period }}</span>
            </div>
            <h3 class="project-name">{{ p.name }}</h3>
            <p class="project-desc">{{ p.desc }}</p>
            <div class="project-stack">
              <span class="tag muted" *ngFor="let t of p.stack">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .featured-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 22px; margin-bottom: 22px;
    }
    .other-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px;
    }
    .project-card {
      display: flex; flex-direction: column; gap: 14px;
      position: relative; overflow: hidden; cursor: default;
      animation: fadeUp .5s ease both;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .card-bar {
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--teal));
      transform: scaleX(0); transform-origin: left;
      transition: transform .35s cubic-bezier(.4,0,.2,1);
    }
    .project-card:hover .card-bar { transform: scaleX(1); }
    .project-card:hover { transform: translateY(-5px); }
    .project-meta {
      display: flex; align-items: center; justify-content: space-between; gap: 10px;
    }
    .period { font-size: .6rem; color: var(--muted); letter-spacing: .08em; white-space: nowrap; }
    .project-name {
      font-family: var(--font-display); font-weight: 700;
      font-size: 1.15rem; letter-spacing: -.01em; line-height: 1.2;
    }
    .featured .project-name { font-size: 1.3rem; }
    .project-desc { font-size: .72rem; line-height: 1.85; color: var(--text-dim); flex: 1; }
    .project-stack {
      display: flex; flex-wrap: wrap; gap: 7px;
      padding-top: 6px; border-top: 1px solid var(--border);
    }
  `]
})
export class ProjectsComponent {
  store = inject(PortfolioStore);
}
