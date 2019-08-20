import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Vacation } from '../../Entities/vacation';
import { Employee, EPosts } from '../../Entities/Employee';

@Component({
    templateUrl: './vacation-list.component.html'
})
export class VacationListComponent implements OnInit {

    vacations: Vacation[];
    nextVacations: Vacation[];
    employees: Employee[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadVacations();
        this.loadNextVacations();
        this.dataService.getEmployees()
            .subscribe((data: Employee[]) => {
                this.employees = data;
            });
    }

    loadVacations() {
        this.dataService.getVacations().subscribe((data: Vacation[]) => this.vacations = data);
    }

    loadNextVacations() {
        this.dataService.getNextVacations().subscribe((data: Vacation[]) => this.nextVacations = data);
    }

    delete(id: number) {
        if (confirm("Вы уверены, что хотите удалить запись об отпуске?")) {
            this.dataService.deleteVacation(id).subscribe(_ => this.loadVacations());
        }
    }

    private getEmployeeName(vacation: Vacation) {
        var employee = this.employees.find(e => e.id === vacation.employeeId);
        return new Array(employee.lastName, employee.firstName, employee.middleName).join(' ');
    }

    private getEmployeePost(vacation: Vacation) {
        var employee = this.employees.find(e => e.id === vacation.employeeId);
        return EPosts[employee.post];
    }
}