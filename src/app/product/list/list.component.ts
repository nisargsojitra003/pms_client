import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, Subject } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  
})
export class ProductListComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  private filterSubject: Subject<string> = new Subject<string>();
  expandedElements: any[] = [];

  constructor() {
    this.filterSubject.pipe(debounceTime(1000)).subscribe((filterValue) => {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    });
  }

  dataSource = new MatTableDataSource(this.getProducts());

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  title: string = 'Products';

  displayedColumns: string[] = [
    'name',
    'tag',
    'categoryName',
    'price',
    'createdAt',
    'updatedAt',
  ];

  isExpansionDetailRow = (index: any, row: any) =>
    row.hasOwnProperty('detailRow');

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  toggleRow(element: any): void {
    const index = this.expandedElements.indexOf(element);
    if (index === -1) {
      this.expandedElements.push(element);
    } else {
      this.expandedElements.splice(index, 1);
    }
  }

  applyFilter(event: Event): void {
    this.filterSubject.next((event.target as HTMLTextAreaElement).value);
  }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Samsung A21s',
        description: '4 GB RAM, 128 GB Storage.',
        tag: 'small',
        category: 1,
        categoryName: 'Electronics',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Samsung S24 Ultra',
        description: 'All in one.',
        tag: 'small',
        category: 1,
        categoryName: 'Electronics',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Oppo reno 3',
        description: 'Dual front camera.',
        tag: 'small',
        category: 1,
        categoryName: 'Electronics',
        price: 12000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Samsung S23 Ultra',
        description: 'best.',
        tag: 'small',
        category: 1,
        categoryName: 'Electronics',
        price: 80000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Murmura',
        description: 'only in 30/-.',
        tag: 'small',
        category: 2,
        categoryName: 'Grocery',
        price: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Peanuts',
        description: 'big peanuts.',
        tag: 'Medium',
        category: 3,
        categoryName: 'Dry-Fruits',
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
