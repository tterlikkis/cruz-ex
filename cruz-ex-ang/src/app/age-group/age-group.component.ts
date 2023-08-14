import { Component, Input } from "@angular/core";
import { AgeGroup } from "src/shared/ageGroup";

@Component({
    selector: "age-group",
    templateUrl: "age-group.component.html",
    styleUrls: ["age-group.component.css"]
})
export class AgeGroupComponent {

    @Input() group: AgeGroup = {
        groupNo: 0,
        min: 0,
        max: 0,
        users: [],
        salary: 0
    };

    titleString = () => {
        return `Age Group ${this.group.min} to ${this.group.max}`;
    }

    averageString = () => {
        if (this.group.users.length === 0) {
            return `No users in this age group`
        }
        return `Average salary of $${this.group.salary.toFixed(2)}`;
    }

}