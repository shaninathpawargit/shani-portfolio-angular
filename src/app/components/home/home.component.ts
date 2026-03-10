import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent }     from '../hero/hero.component';
import { SkillsComponent }   from '../skills/skills.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AwardsComponent }   from '../awards/awards.component';
import { ContactComponent }  from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    AwardsComponent,
    ContactComponent,
  ],
  template: `
    <main>
      <app-hero />
      <app-skills />
      <app-timeline />
      <app-projects />
      <app-awards />
      <app-contact />
    </main>
  `
})
export class HomeComponent {}
