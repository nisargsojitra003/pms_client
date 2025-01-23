import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: MenuItem[] = [
    {
      title: 'Categories',
      icon: 'category',
      link: '/category/list',
      color: '#ff7f0e',
      urlSegment: 'category',
    },
    {
      title: 'Products',
      icon: 'inventory',
      link: '/product/list',
      color: '#ff7f0e',
      urlSegment: 'product',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      urlSegment: '',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
          urlSegment: '',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
          urlSegment: '',
        },
      ],
    },
  ];
}
