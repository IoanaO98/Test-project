import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Output() titleChange = new EventEmitter<string>();
  @Output() subtitleChange = new EventEmitter<string>();
  @Input() isDisabled: boolean = false;
  @Input() resetInput: boolean = false;
  titleInput: string = '';
  subtitleInput: string = '';
  constructor() {}

  ngOnInit(): void {}
}
