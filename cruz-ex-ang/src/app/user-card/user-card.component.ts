import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from 'src/shared/user';
import { UserService } from '../../shared/user.service';
import { ModalService } from 'src/shared/modal.service';

@Component({
    selector: "user-card",
    templateUrl: "user-card.component.html",
    styleUrls: ["user-card.component.css"]
})
export class UserCardComponent {
    @Input() user!: User;

    constructor(public userService: UserService, private modalService: ModalService) {}

    editClick = () => {
        this.modalService.openEdit(this.user);
    }

    deleteClick = () => {
        this.userService.remove(this.user.id);
    }
}