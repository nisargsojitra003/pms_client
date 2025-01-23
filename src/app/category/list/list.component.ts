import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, Subject } from 'rxjs';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'void',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CategoryListComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  private filterSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.filterSubject.pipe(debounceTime(1000)).subscribe((filterValue) => {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    });
  }

  exandedElement: Category | undefined;
  dataSource = new MatTableDataSource(this.getCategories());

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  title: string = 'Categories';
  displayedColumns: string[] = [
    'name',
    'description',
    'code',
    'createdAt',
    'updatedAt',
  ];

  isExpansionDetailRow = (index: any, row: any) =>
    row.hasOwnProperty('detailRow');

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    this.filterSubject.next((event.target as HTMLTextAreaElement).value);
  }

  getCategories(): Category[] {
    return [
      {
        id: 1,
        name: 'Electronics',
        description: 'All electronics are included.',
        code: 'E123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Cutlery',
        description: 'All cutlery items are included.',
        code: 'C456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Grocery',
        description: 'All Grocery are included.',
        code: 'G789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Water-bottle',
        description: 'All water bottle are included.',
        code: 'G783',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Medicines',
        description: 'All Medicines are included.',
        code: 'G383',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Keyboard',
        description: 'All Keyboard are included.',
        code: 'G333',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Books',
        description: 'All Books are included.',
        code: 'G348',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Headphone',
        description: 'All Headphone are included.',
        code: 'G343',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Tables',
        description: 'All Tables are included.',
        code: 'G363',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Mobiles',
        description: 'All Mobiles are included.',
        code: 'G233',
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
