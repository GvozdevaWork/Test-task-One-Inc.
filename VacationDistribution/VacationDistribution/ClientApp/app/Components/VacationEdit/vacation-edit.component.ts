import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { Vacation } from '../../Entities/vacation';

@Component({
    templateUrl: './vacation-edit.component.html'
})
export class VacationEditComponent implements OnInit {

    id: number;
    vacation: Vacation;
    loaded: boolean = false;
    error: any;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getVacation(this.id)
                .subscribe((data: Vacation) => {
                    this.vacation = data;
                    if (this.vacation != null) this.loaded = true;
                });
        }
    }

    save() {
        this.dataService.updateVacation(this.vacation).subscribe(
            (data) => this.router.navigateByUrl("/vacationlist"),
            (err) => this.error = err.error);
    }
}