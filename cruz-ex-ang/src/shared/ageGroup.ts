import { User } from "./user";

export interface AgeGroup {
    groupNo: number,
    min: number,
    max: number,
    users: User[],
    salary: number
}