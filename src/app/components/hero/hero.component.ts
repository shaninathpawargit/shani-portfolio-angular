import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  store = inject(PortfolioStore);

  achievements = [
    { value: '70–80%', label: 'Bundle size reduced' },
    { value: '30–40%', label: 'Faster data fetching' },
    { value: '60–70%', label: 'CSAT improvement' },
    { value: '80–90%', label: 'Manual work eliminated' },
  ];
}
