import { User } from "./user";

export const leapCheck = (year: number): boolean => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

export const range = (start: number, end: number): number[] => 
    Array.from({length: end - start + 1}, (_, idx) => start + idx)

export const userList = (): User[] => {
    let list: User[] = [];
    list.push(User.create(randNum(6), "John", "Doe", 25, 1990, 5, 15, (randNum(2) * 1000), "123 Main St", "Anytown", "California", 12345));
    list.push(User.create(randNum(6), "Jane", "Smith", randNum(2), 1985, 10, 8, (randNum(2) * 1000), "456 Elm Ave", "Somewhere", "New York", 67890));
    list.push(User.create(randNum(6), "Michael", "Johnson", randNum(2), 1992, 2, 25, (randNum(2) * 1000), "789 Oak Rd", "Smallville", "Texas", 54321));
    list.push(User.create(randNum(6), "Emily", "Williams", randNum(2), 1988, 9, 12, (randNum(2) * 1000), "101 Pine Lane", "Cityville", "Illinois", 98765));
    list.push(User.create(randNum(6), "David", "Brown", randNum(2), 1995, 7, 3, (randNum(2) * 1000), "222 Maple Street", "Metro City", "California", 13579));
    list.push(User.create(randNum(6), "Sarah", "Jones", randNum(2), 1983, 4, 18, (randNum(2) * 1000), "333 Birch Blvd", "Riverdale", "Georgia", 24680));
    list.push(User.create(randNum(6), "Daniel", "Davis", randNum(2), 1991, 11, 28, (randNum(2) * 1000), "444 Cedar Court", "Hometown", "Ohio", 86420));
    list.push(User.create(randNum(6), "Jessica", "Miller", randNum(2), 1987, 6, 9, (randNum(2) * 1000), "555 Willow Avenue", "Sometown", "Florida", 97531));
    list.push(User.create(randNum(6), "Christopher", "Wilson", randNum(2), 1993, 1, 22, (randNum(2) * 1000), "666 Oak Lane", "Villageville", "Washington", 73210));
    list.push(User.create(randNum(6), "Amanda", "Moore", randNum(2), 1989, 8, 5, (randNum(2) * 1000), "777 Elm Street", "Hamlet", "North Carolina", 58109));
    list.push(User.create(randNum(6), "Matthew", "Taylor", randNum(2), 1994, 3, 31, (randNum(2) * 1000), "888 Pine Avenue", "Suburbia", "Michigan", 42601));
    list.push(User.create(randNum(6), "Ashley", "Anderson", randNum(2), 1986, 12, 14, (randNum(2) * 1000), "999 Birch Lane", "Countryside", "Wisconsin", 63820));
    list.push(User.create(randNum(6), "Andrew", "Martinez", randNum(2), 1997, 10, 2, (randNum(2) * 1000), "111 Maple Road", "Townville", "Arizona", 24057));
    list.push(User.create(randNum(6), "Lauren", "Hernandez", randNum(2), 1984, 5, 20, (randNum(2) * 1000), "222 Cedar Street", "Metropolis", "California", 85246));
    list.push(User.create(randNum(6), "Ryan", "Garcia", randNum(2), 1996, 9, 9, (randNum(2) * 1000), "333 Elm Lane", "Midtown", "Texas", 13795));
    list.push(User.create(randNum(6), "Olivia", "Lopez", randNum(2), 1982, 2, 7, (randNum(2) * 1000), "444 Oak Road", "Downtown", "New York", 57901));
    list.push(User.create(randNum(6), "William", "Rodriguez", randNum(2), 1998, 4, 29, (randNum(2) * 1000), "555 Pine Lane", "Uptown", "Illinois", 70213));
    list.push(User.create(randNum(6), "Sophia", "Ramirez", randNum(2), 1981, 8, 16, (randNum(2) * 1000), "666 Elm Avenue", "Outskirts", "Florida", 39017));
    list.push(User.create(randNum(6), "James", "Perez", randNum(2), 1999, 7, 1, (randNum(2) * 1000), "777 Birch Court", "Countryside", "California", 16842));
    list.push(User.create(randNum(6), "Isabella", "Gonzalez", randNum(2), 1980, 11, 11, (randNum(2) * 1000), "888 Maple Street", "Hometown", "Texas", 45876));
    

    return list;
}

export const randNum = (digits: number): number => {
    const min = Math.pow(10, digits - 1)
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}
