import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './user.service';
import { User } from './user';
import { EditModalComponent } from 'src/app/edit-modal/edit-modal.component';
import { randNum } from './functions';
import { ViewModalComponent } from 'src/app/view-modal/view-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  constructor(public matDialog: MatDialog, public userService: UserService) {}

  openEdit = (user: User) => {
    const dialogRef = this.matDialog.open(EditModalComponent, {
      data: { user: user, title: "Edit User" }
    });
    dialogRef.afterClosed().subscribe(newUser => {
      if (newUser) { this.userService.edit(newUser) }
    });
  }

  openAdd = () => {
    let newUser = new User();
    newUser.id = randNum(6);
    const dialogRef = this.matDialog.open(EditModalComponent, {
      data: { user: newUser, title: "Create User" }
    });
    dialogRef.afterClosed().subscribe(newUser => {
      if (newUser) { this.userService.add(newUser) }
    });
  }

  openView = (user: User) => {
    const dialogRef = this.matDialog.open(ViewModalComponent, {
      data: { user: user }
    });
  }
}
