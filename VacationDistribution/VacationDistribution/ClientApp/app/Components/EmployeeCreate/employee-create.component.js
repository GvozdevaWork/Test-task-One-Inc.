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
import { Employee } from '../../Entities/Employee';
import { DataService } from '../../Services/data.service';
var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.employee = new Employee();
    }
    EmployeeCreateComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createEmployee(this.employee).subscribe(function (_) { return _this.router.navigateByUrl("/"); });
    };
    EmployeeCreateComponent = __decorate([
        Component({
            templateUrl: './employee-create.component.html'
        }),
        __metadata("design:paramtypes", [DataService, Router])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());
export { EmployeeCreateComponent };
//# sourceMappingURL=employee-create.component.js.map