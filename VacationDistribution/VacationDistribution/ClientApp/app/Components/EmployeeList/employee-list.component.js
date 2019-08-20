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
import { EPosts } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(dataService) {
        this.dataService = dataService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.loadEmployees();
    };
    EmployeeListComponent.prototype.loadEmployees = function () {
        var _this = this;
        this.dataService.getEmployees().subscribe(function (data) { return _this.employees = data; });
    };
    EmployeeListComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("Вы уверены, что хотите удалить сотрудника?")) {
            this.dataService.deleteEmployee(id).subscribe(function (_) { return _this.loadEmployees(); });
        }
    };
    EmployeeListComponent.prototype.getPostName = function (post) {
        return EPosts[post];
    };
    EmployeeListComponent = __decorate([
        Component({
            templateUrl: './employee-list.component.html'
        }),
        __metadata("design:paramtypes", [DataService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map