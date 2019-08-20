import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { Vacation } from '../../Entities/vacation';
import { error } from '@angular/compiler/src/util';

@Component({
    templateUrl: './vacation-add.component.html'
})
export class VacationAddComponent {
    vacation: Vacation = new Vacation();
    error: any;
    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.addVacation(this.vacation).subscribe(
            (data) => this.router.navigateByUrl("/vacationlist"),
            (err) => this.error = err.error);
    }
}