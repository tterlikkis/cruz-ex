import { Component, ElementRef, ViewChild } from '@angular/core';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/shared/user';
import { randNum, userList } from 'src/shared/functions';
import { UserService } from '../shared/user.service';
import { WpfService } from 'src/shared/wpf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public matDialog: MatDialog, public userService: UserService, private wpfService: WpfService) {}

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
}
