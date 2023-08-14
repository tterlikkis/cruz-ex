import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class WpfService {

  public userSubject = new Subject<string>();

  constructor() {
    this.getUsers(); 
    window?.chrome?.webview?.addEventListener('message', (event: any) => {
      const data = event.data as string;
      if (data.startsWith("users")) {
        this.userSubject.next(data.slice(6));
      }
    });
  }

  getUsers = () => {
    this.sendMessage("getUsers");
  }

  add = (user: User) => {
    const userData = JSON.stringify(user);
    this.sendMessage(`addUser ${userData}`);
  }

  edit = (user: User) => {
    const userData = JSON.stringify(user);
    this.sendMessage(`editUser ${userData}`);
  }

  remove = (id: number) => {
    const idString = id.toString();
    this.sendMessage(`removeUser ${idString}`);
  }

  private sendMessage = (message: string) => {
    window?.chrome?.webview.postMessage(message);
  }

}

declare global {
  interface Window {
    chrome: any;
  }
}
