﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';

@Component({
    templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {

    id: number;
    employee: Employee;
    loaded: boolean = false;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getEmployee(this.id)
                .subscribe((data: Employee) => {
                    this.employee = data;
                    if (this.employee != null) this.loaded = true;
                });
        }
    }

    save() {
        this.dataService.updateEmployee(this.employee).subscribe(_ => this.router.navigateByUrl("/"));
    }
}