import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalService } from 'src/shared/modal.service';
import { User } from 'src/shared/user';
import { UserService } from 'src/shared/user.service';

interface DialogData {
  user: User;
}

@Component({
  selector: 'view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {

  user: User;

  constructor(private dialogRef: MatDialogRef<ViewModalComponent>, private modalService: ModalService, 
    private userService: UserService, @Inject(MAT_DIALOG_DATA) private data: DialogData) {
    this.user = User.createFromObject(this.data.user);
  }

  close = () => {
    this.dialogRef.close();
  }

  edit = () => {
    this.close();
    this.modalService.openEdit(this.user);
  }

  delete = () => {
    this.close();
    this.userService.remove(this.user.id);
  }
}
