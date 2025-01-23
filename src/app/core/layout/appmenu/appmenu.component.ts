import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../../interfaces/menuItem.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css',
})
export class AppmenuComponent {
  @Input() menu: MenuItem[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  isProductActive(currentUrlSegment: string): boolean {
    return this.router.url.startsWith(currentUrlSegment);
  }
}
