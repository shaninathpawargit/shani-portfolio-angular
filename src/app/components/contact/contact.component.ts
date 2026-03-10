import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../store/portfolio.store';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  store = inject(PortfolioStore);

  contactLinks = [
    { icon: '✉', label: 'Email',    value: 'shaninathpawar.jobs@gmail.com', href: 'mailto:shaninathpawar.jobs@gmail.com' },
    { icon: '📱', label: 'Phone',   value: '+91 8381025113',                href: 'tel:+918381025113' },
    { icon: 'in', label: 'LinkedIn', value: 'shaninath-pawar-0b95b5189',    href: 'https://www.linkedin.com/in/shaninath-pawar-0b95b5189/' },
    { icon: '⌥', label: 'GitHub',   value: 'shaninathpawargit',             href: 'https://github.com/shaninathpawargit' },
  ];
}
