import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Nisarg';

  logout(): void {
    console.log('Logged out');
  }
}
