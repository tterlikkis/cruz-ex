import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ModalService } from 'src/shared/modal.service';

@Component({
    selector: "header-card",
    templateUrl: "header-card.component.html",
    styleUrls:["header-card.component.css"]
})
export class HeaderCardComponent {
    filterValue = "";
    filterBy = "";
    filterByOptions = ["Name", "Address", "Salary", "Age"];
    sortBy = "desc";

    @Output("onAdd") addEvent = new EventEmitter();

    constructor(private userService: UserService, private modalService: ModalService) {}

    add = () => {
        this.modalService.openAdd();
    }

    filter = () => {
        this.userService.filter(this.filterValue, this.filterBy);
    }

    sort = () => {
        this.userService.sort(this.sortBy);
    }
}