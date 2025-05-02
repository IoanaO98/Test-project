import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'test-project';
  titleCard: string = '';
  subtitleCard: string = '';
  isActive = false;
  titleContainer: string = '';
  selectedColor: 'blue' | 'green' | 'sunset' | 'red' | 'orange' = 'blue';
  isActiveCardDisabled = false;
  isResetInput = false;
  colorOptions = [
    { value: 'blue', label: 'Secondary / Blue' },
    { value: 'green', label: 'System / Green' },
    { value: 'sunset', label: 'Primary / Sunset' },
    { value: 'red', label: 'System / Red' },
    { value: 'orange', label: 'Orange / Sys' },
  ];

  onCardDisabledChange(disabled: boolean) {
    this.isActiveCardDisabled = disabled;

    if (disabled) {
      this.titleCard = 'Title 2.2';
      this.subtitleCard = 'Content';
      this.titleContainer = 'Title container Input';
      this.isResetInput = true;
      this.selectedColor = 'blue';
    } else {
      this.isResetInput = false;
    }
  }
}
