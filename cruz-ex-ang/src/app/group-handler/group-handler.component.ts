import { Component } from '@angular/core';
import { AgeGroup } from 'src/shared/ageGroup';
import { User } from 'src/shared/user';
import { UserService } from 'src/shared/user.service';



@Component({
    selector:"group-handler",
    templateUrl: "group-handler.component.html",
    styleUrls: ["group-handler.component.css"]
})
export class GroupHandlerComponent {

    ageGroups: AgeGroup[] = [];

    min: number | null = null;
    max: number | null = null;

    constructor(public userService: UserService) {

        this.addGroup(20, 24);
        this.addGroup(25, 29);
        this.addGroup(30, 34);
        this.addGroup(35, 39);
        this.addGroup(40, 44);

        this.userService.userSubject.subscribe({
            next: (value: User[]) => {
                this.handleChange(value);
            }
        })
    }

    addClick = () => {
        if (this.min && this.max) {
            this.addGroup(this.min, this.max);
            this.min = null;
            this.max = null;
        } 
    }

    deleteClick = (groupNo: number) => {
        this.ageGroups = this.ageGroups.filter(group => group.groupNo != groupNo);
        this.handleChange();
    }

    addGroup = (min: number, max: number) => {
        const groupNo = this.ageGroups.length + 1;
        this.ageGroups.push({groupNo, min, max, users: [], salary: 0});
        this.handleChange();
    }

    handleChange = (users: User[] = this.userService.users) => {
        for (let group of this.ageGroups) {
            group.users = users.filter(user => user.age >= group.min && user.age <= group.max);
            group.salary = this.calculateSalary(group.users);
        }
    }

    calculateSalary = (users: User[]): number => {
        if (users.length === 0) { return -1 }
        return users.map(user => user.salary!).reduce((acc, cur) => acc + cur, 0) / users.length;
    }

}