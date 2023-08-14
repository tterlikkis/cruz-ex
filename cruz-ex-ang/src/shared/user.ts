interface UserInterface {
    [key: string]: any;
}

export class User implements UserInterface {

    [key: string]: any;

    id = 0;
    firstName = "";
    lastName = "";
    age = 0;
    birthYear = 0;
    birthMonth = 0;
    birthDay = 0;
    salary = 0;
    address = "";
    city = "";
    state = "";
    zip = 0;
    image?: any;

    nameString = (): string => {
        return `${this.firstName} ${this.lastName}`;
    }

    dobString = (): string => {
        const month = this.birthMonth.toString().padStart(2, '0');
        const day = this.birthDay.toString().padStart(2, '0');
        const year = this.birthYear.toString().padStart(4, '0');
        return `${month}/${day}/${year}`;
    }

    addressString = (): string => {
        const zipString = this.zip ? this.zip.toString() : '';
        return `${this.address}, ${this.city}, ${this.state} ${zipString}`;
    }

    salaryString = (): string => {
        return this.salary ? `$${this.salary.toFixed(2)}` : '';
    }

    setAllValues = (id: number, firstName: string, lastName: string, age: number, 
        birthYear: number, birthMonth: number, birthDay: number, salary: number, 
        address: string, city: string, state: string, zip: number, image?: any) => {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.birthYear = birthYear;
            this.birthMonth = birthMonth;
            this.birthDay = birthDay
            this.salary = salary;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.image = image;
    }

    static create = (id: number, firstName: string, lastName: string, age: number, 
         birthYear: number, birthMonth: number, birthDay: number, salary: number,
        address: string, city: string, state: string, zip: number, image?: any): User => {
            let user = new User();
            user.setAllValues(id, firstName, lastName, age, birthYear, birthMonth, birthDay, 
                salary, address, city, state, zip, image);
            return user;
    }

    static createFromObject = (obj: any) => {
        let user = new User();
        user.setAllValues(obj.id, obj.firstName, obj.lastName, obj.age,
            obj.birthYear, obj.birthMonth, obj.birthDay, obj.salary,
            obj.address, obj.city, obj.state, obj.zip, obj.image);
        return user;
    }

}