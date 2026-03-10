import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { PortfolioState, TimelineTab } from '../models/portfolio.models';
import { INITIAL_PORTFOLIO_STATE } from './portfolio.data';

export const PortfolioStore = signalStore(
  { providedIn: 'root' },

  withState<PortfolioState>(INITIAL_PORTFOLIO_STATE),

  withComputed((store) => ({
    featuredProjects: computed(() => store.projects().filter(p => p.featured)),
    otherProjects:    computed(() => store.projects().filter(p => !p.featured)),
    firstName:        computed(() => store.personal().name.split(' ')[0]),
    lastName:         computed(() => store.personal().name.split(' ')[1]),
    isExperienceTab:  computed(() => store.activeTimelineTab() === 'experience'),
    isEducationTab:   computed(() => store.activeTimelineTab() === 'education'),
    currentRole:      computed(() => store.experience().find(e => e.current) ?? null),
  })),

  withMethods((store) => ({
    setTimelineTab(tab: TimelineTab): void {
      patchState(store, { activeTimelineTab: tab });
    },
    setNavScrolled(scrolled: boolean): void {
      patchState(store, { navScrolled: scrolled });
    },
    toggleMobileMenu(): void {
      patchState(store, { mobileMenuOpen: !store.mobileMenuOpen() });
    },
    closeMobileMenu(): void {
      patchState(store, { mobileMenuOpen: false });
    },
  }))
);
