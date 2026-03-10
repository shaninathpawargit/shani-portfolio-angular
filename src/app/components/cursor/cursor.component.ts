import { Component, OnInit, OnDestroy, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cursor-dot"
         [class.hovering]="isHovering()"
         [style.left.px]="dotX()"
         [style.top.px]="dotY()">
    </div>
    <div class="cursor-ring"
         [class.hovering]="isHovering()"
         [style.left.px]="ringX()"
         [style.top.px]="ringY()">
    </div>
  `,
  styles: [`
    .cursor-dot {
      position: fixed;
      width: 10px; height: 10px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width .2s, height .2s, background .2s;
      mix-blend-mode: screen;
    }
    .cursor-ring {
      position: fixed;
      width: 38px; height: 38px;
      border: 1.5px solid rgba(91,138,255,.45);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width .2s, height .2s, opacity .2s, border-color .2s;
    }
    .cursor-dot.hovering  { width: 14px; height: 14px; background: var(--teal); }
    .cursor-ring.hovering { width: 60px; height: 60px; opacity: .3; border-color: var(--teal); }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  dotX  = signal(0); dotY  = signal(0);
  ringX = signal(0); ringY = signal(0);
  isHovering = signal(false);

  private mouseX = 0;
  private mouseY = 0;
  private rafId: number | null = null;
  private observers: (() => void)[] = [];

  ngOnInit(): void {
    this.animateRing();
    this.attachHoverListeners();

    const mo = new MutationObserver(() => this.attachHoverListeners());
    mo.observe(document.body, { childList: true, subtree: true });
    this.observers.push(() => mo.disconnect());
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.dotX.set(e.clientX);
    this.dotY.set(e.clientY);
  }

  private animateRing(): void {
    const loop = () => {
      this.ringX.update(v => v + (this.mouseX - v) * 0.18);
      this.ringY.update(v => v + (this.mouseY - v) * 0.18);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  private attachHoverListeners(): void {
    document.querySelectorAll<HTMLElement>('a, button, [data-hover]').forEach(el => {
      if (el.dataset['cursorAttached']) return;
      el.dataset['cursorAttached'] = '1';
      el.addEventListener('mouseenter', () => this.isHovering.set(true));
      el.addEventListener('mouseleave', () => this.isHovering.set(false));
    });
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.observers.forEach(fn => fn());
  }
}
