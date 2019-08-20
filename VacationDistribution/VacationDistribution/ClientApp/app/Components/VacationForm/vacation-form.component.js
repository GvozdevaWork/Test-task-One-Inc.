var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Vacation } from '../../Entities/vacation';
import { DataService } from '../../Services/data.service';
var VacationFormComponent = /** @class */ (function () {
    function VacationFormComponent(dataService) {
        this.dataService = dataService;
    }
    VacationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getEmployees().subscribe(function (data) { return _this.employees = data; });
    };
    __decorate([
        Input(),
        __metadata("design:type", Vacation)
    ], VacationFormComponent.prototype, "vacation", void 0);
    VacationFormComponent = __decorate([
        Component({
            selector: 'vacation-form',
            templateUrl: './vacation-form.component.html'
        }),
        __metadata("design:paramtypes", [DataService])
    ], VacationFormComponent);
    return VacationFormComponent;
}());
export { VacationFormComponent };
//# sourceMappingURL=vacation-form.component.js.map