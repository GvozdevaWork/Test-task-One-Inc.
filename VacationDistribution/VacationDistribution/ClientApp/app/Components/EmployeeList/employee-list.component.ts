import { Component, OnInit } from '@angular/core';
import { Employee, EPosts } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';

@Component({
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        this.dataService.getEmployees().subscribe((data: Employee[]) => this.employees = data);
    }

    delete(id: number) {
        if (confirm("Вы уверены, что хотите удалить сотрудника?")) {
            this.dataService.deleteEmployee(id).subscribe(_ => this.loadEmployees());
        }        
    }

    private getPostName(post: EPosts) {
        return EPosts[post];
    }
}