import { Component, Input } from '@angular/core';
import { ModalService } from 'src/shared/modal.service';
import { User } from 'src/shared/user';

@Component({
  selector: 'small-user-card',
  templateUrl: './small-user-card.component.html',
  styleUrls: ['./small-user-card.component.css']
})
export class SmallUserCardComponent {
  @Input() user = new User();

  constructor(private modalService: ModalService) {}

  wrapperClick = () => {
    this.modalService.openView(this.user);
  }
}
