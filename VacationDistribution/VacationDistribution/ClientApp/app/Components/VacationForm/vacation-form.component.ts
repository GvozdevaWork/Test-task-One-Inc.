import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vacation } from '../../Entities/vacation';
import { Employee } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'vacation-form',
    templateUrl: './vacation-form.component.html'
})
export class VacationFormComponent {
    @Input() vacation: Vacation;
    employees: Employee[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getEmployees().subscribe((data: Employee[]) => this.employees = data);
    }
}