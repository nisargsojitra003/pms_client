import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appActiveClassOnRoute]',
})
export class ActiveClassOnRouteDirective implements OnInit {
  @Input('appActiveClassOnRoute') routeSegment: string = '';
  private element: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    if (this.router.url.includes(this.routeSegment)) {
      this.renderer.addClass(this.element, 'active');
    } else {
      this.renderer.removeClass(this.element, 'active');
    }
  }
}
