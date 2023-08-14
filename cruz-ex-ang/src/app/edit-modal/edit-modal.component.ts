import { Component, ElementRef, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { leapCheck, randNum, range } from "src/shared/functions";
import { User } from "src/shared/user";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"

interface DialogData {
    user: User
    title: string
}

@Component({
    selector:"edit-modal",
    templateUrl:"edit-modal.component.html",
    styleUrls:["edit-modal.component.css"]
})
export class EditModalComponent {

    private _currentYear = new Date().getFullYear();
    private _currentMonth = new Date().getMonth();
    private _currentDay = new Date().getDay();

    user: User;

    yearOptions: number[] = range(1900, this._currentYear).reverse();
    monthOptions: number[] = range(1, 12);
    dayOptions: number[] = [];
    stateOptions: string[] = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
        "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
        "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    constructor(public dialogRef: MatDialogRef<EditModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.user = User.createFromObject(this.data.user);
        this.handleMonthChange(this.user.birthMonth);
        this.handleDayChange(this.user.birthDay);
    }

    close = () => this.dialogRef.close()

    handleSalaryChange = (newSalary: string) => {
        if (!newSalary.match("[0-9]+")) { return }
        this.user.salary = parseInt(newSalary);
    }

    handleMonthChange = (newMonth: number) => {
        const shortMonths = [2, 4, 6, 9, 11];
        if (newMonth === 2) {
            this.dayOptions = leapCheck(this.user.birthYear) ? range(1, 29) : range(1, 28);
        }
        else if (shortMonths.includes(newMonth)) {
            this.dayOptions = range(1, 30);
        }
        else {
            this.dayOptions = range(1, 31);
        }
    }

    handleDayChange = (newDay: number) => {
        let tempAge = this._currentYear - this.user.birthYear;
        if (this.user.birthMonth >= this._currentMonth && this.user.birthDay >= newDay) {
            tempAge++;
        }
        this.user.age = tempAge;
    }

    handleZipChange = (newZip: string) => {
        if (!newZip.match("[0-9]+")) { return }
        this.user.zip = parseInt(newZip);
    }

    uploadFile = (event: Event) => {
        var reader = new FileReader();

        reader.onload = (event: any) => {
            this.user.image = event.target.result;
        }

        const element = event.currentTarget as HTMLInputElement;
        let fileList: FileList | null = element.files;
        if (fileList) {
            reader.readAsDataURL(fileList[0])
        }
    }

    numToMonth = (numMonth: number): string => {
        switch (numMonth) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "";
        }
    }


}