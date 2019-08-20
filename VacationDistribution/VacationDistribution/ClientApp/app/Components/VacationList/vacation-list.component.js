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
import { DataService } from '../../Services/data.service';
import { EPosts } from '../../Entities/Employee';
var VacationListComponent = /** @class */ (function () {
    function VacationListComponent(dataService) {
        this.dataService = dataService;
    }
    VacationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadVacations();
        this.loadNextVacations();
        this.dataService.getEmployees()
            .subscribe(function (data) {
            _this.employees = data;
        });
    };
    VacationListComponent.prototype.loadVacations = function () {
        var _this = this;
        this.dataService.getVacations().subscribe(function (data) { return _this.vacations = data; });
    };
    VacationListComponent.prototype.loadNextVacations = function () {
        var _this = this;
        this.dataService.getNextVacations().subscribe(function (data) { return _this.nextVacations = data; });
    };
    VacationListComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("Вы уверены, что хотите удалить запись об отпуске?")) {
            this.dataService.deleteVacation(id).subscribe(function (_) { return _this.loadVacations(); });
        }
    };
    VacationListComponent.prototype.getEmployeeName = function (vacation) {
        var employee = this.employees.find(function (e) { return e.id === vacation.employeeId; });
        return new Array(employee.lastName, employee.firstName, employee.middleName).join(' ');
    };
    VacationListComponent.prototype.getEmployeePost = function (vacation) {
        var employee = this.employees.find(function (e) { return e.id === vacation.employeeId; });
        return EPosts[employee.post];
    };
    VacationListComponent = __decorate([
        Component({
            templateUrl: './vacation-list.component.html'
        }),
        __metadata("design:paramtypes", [DataService])
    ], VacationListComponent);
    return VacationListComponent;
}());
export { VacationListComponent };
//# sourceMappingURL=vacation-list.component.js.map