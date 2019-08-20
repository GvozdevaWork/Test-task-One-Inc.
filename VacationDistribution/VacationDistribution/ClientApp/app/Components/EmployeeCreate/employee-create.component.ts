import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';

@Component({
    templateUrl: './employee-create.component.html'
})
export class EmployeeCreateComponent {
    employee: Employee = new Employee();
    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.createEmployee(this.employee).subscribe(_ => this.router.navigateByUrl("/"));
    }
}