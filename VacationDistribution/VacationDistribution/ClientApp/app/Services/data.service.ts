import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Entities/Employee';
import { Vacation } from '../Entities/vacation';

@Injectable()
export class DataService {

    private url = "/api";
    private employeeUrl = this.url + "/employees";
    private vacationUrl = this.url + "/vacations";

    constructor(private http: HttpClient) {
    }

    getEmployees() {
        return this.http.get(this.employeeUrl);
    }

    getEmployee(id: number) {
        return this.http.get(this.employeeUrl + '/' + id);
    }

    createEmployee(employee: Employee) {
        return this.http.post(this.employeeUrl, employee);
    }

    updateEmployee(employee: Employee) {

        return this.http.put(this.employeeUrl, employee);
    }

    deleteEmployee(id: number) {
        return this.http.delete(this.employeeUrl + '/' + id);
    }

    getVacations() {
        return this.http.get(this.vacationUrl);
    }

    getNextVacations() {
        return this.http.get(this.vacationUrl + '/next');
    }

    getVacation(id: number) {
        return this.http.get(this.vacationUrl + '/' + id);
    }

    addVacation(vacation: Vacation) {
        return this.http.post(this.vacationUrl, vacation);
    }

    updateVacation(vacation: Vacation) {

        return this.http.put(this.vacationUrl, vacation);
    }

    deleteVacation(id: number) {
        return this.http.delete(this.vacationUrl + '/' + id);
    }
}