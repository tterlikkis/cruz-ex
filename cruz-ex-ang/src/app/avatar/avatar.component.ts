import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnChanges {
  @Input() file?: any;

  hasFile = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.hasFile = this.file !== undefined && this.file !== "";
  }
}
