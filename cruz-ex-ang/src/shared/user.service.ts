import { Injectable } from '@angular/core';
import { userList } from 'src/shared/functions';
import { User } from 'src/shared/user';
import { WpfService } from './wpf.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  setUsers = (users: typeof this.users) => { 
    this.users = users; 
    this.userSubject.next(users); 
    this.filter(); 
  }

  viewedUsers: User[] = [];
  setViewedUsers = (viewedUsers: typeof this.viewedUsers) => { this.viewedUsers = viewedUsers }

  userSubject = new Subject<User[]>();

  private _lastFilterValue = "";
  private _lastFilterBy = "";
  private _lastOrder = "desc";

  constructor(private wpfService: WpfService) { 
    this.wpfService.userSubject.subscribe({
      next: (rawData) => {
        const array: any[] = JSON.parse(rawData);
        console.dir(array);
        this.setUsers(array.map(item => User.createFromObject(item)));
      }
    })
  }

  add = (newUser: User) => {
    this.wpfService.add(newUser);
    // let newUsers = [ ...this.users ];
    // newUsers.push(newUser);
    // this.setUsers(newUsers);
  }

  remove = (id: number) => {
    this.wpfService.remove(id);
    // this.setUsers(this.users.filter(user => user.id !== id));
  }

  edit = (newUser: User) => {
    this.wpfService.edit(newUser);
    // this.setUsers(this.users.map(user => {
    //   if (user.id === newUser.id) {
    //     return newUser;
    //   }
    //   return user;
    // }));
  }

  filter = (filterValue: string = this._lastFilterValue, filterBy: string = this._lastFilterBy) => {

    this._lastFilterValue = filterValue;
    this._lastFilterBy = filterBy;

    const value = filterValue.toLowerCase();
    const prop = filterBy.toLowerCase();

    if (prop === "") { 
      this.setViewedUsers([ ...this.users ]);
    }
    else if (prop === "name") {
      this.setViewedUsers(this.users.filter(user => 
        user.nameString().toLowerCase().includes(value)
      ));
    }
    else if (prop === "address") {
      this.setViewedUsers(this.users.filter(user => 
        user.addressString().toLowerCase().includes(value)
      ));
    }
    else {
      this.setViewedUsers(this.users.filter(user => 
        (user[prop] as Number).toString().includes(value)
      ));
    }
    this.sort();
  }

  sort = (order: string = this._lastOrder) => {
    this._lastOrder = order;
    const newUsers = this.viewedUsers.sort((u1, u2) => u1.salary! - u2.salary!);
    const reverseUsers = [...newUsers].reverse();
    this.setViewedUsers(order === "asc" ? newUsers : reverseUsers);
  }

  ageGroup = (min: number, max: number): User[] => {
    return this.users.filter(user => user.age! >= min && user.age! <= max);
  }

}
