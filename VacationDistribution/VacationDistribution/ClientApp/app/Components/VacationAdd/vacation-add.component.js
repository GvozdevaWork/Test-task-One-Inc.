var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
import { Vacation } from '../../Entities/vacation';
var VacationAddComponent = /** @class */ (function () {
    function VacationAddComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.vacation = new Vacation();
    }
    VacationAddComponent.prototype.save = function () {
        var _this = this;
        this.dataService.addVacation(this.vacation).subscribe(function (data) { return _this.router.navigateByUrl("/vacationlist"); }, function (err) { return _this.error = err.error; });
    };
    VacationAddComponent = __decorate([
        Component({
            templateUrl: './vacation-add.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], VacationAddComponent);
    return VacationAddComponent;
}());
export { VacationAddComponent };
//# sourceMappingURL=vacation-add.component.js.map