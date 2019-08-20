import { Component, Input } from '@angular/core';
import { Employee, EPostsToLabelMapping } from '../../Entities/Employee';

@Component({
    selector: "employee-form",
    templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
    @Input() employee: Employee;
    ePostsToLabelMapping = EPostsToLabelMapping;
}