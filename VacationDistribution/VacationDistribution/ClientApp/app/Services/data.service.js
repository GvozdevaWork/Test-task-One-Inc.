var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api";
        this.employeeUrl = this.url + "/employees";
        this.vacationUrl = this.url + "/vacations";
    }
    DataService.prototype.getEmployees = function () {
        return this.http.get(this.employeeUrl);
    };
    DataService.prototype.getEmployee = function (id) {
        return this.http.get(this.employeeUrl + '/' + id);
    };
    DataService.prototype.createEmployee = function (employee) {
        return this.http.post(this.employeeUrl, employee);
    };
    DataService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.employeeUrl, employee);
    };
    DataService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.employeeUrl + '/' + id);
    };
    DataService.prototype.getVacations = function () {
        return this.http.get(this.vacationUrl);
    };
    DataService.prototype.getNextVacations = function () {
        return this.http.get(this.vacationUrl + '/next');
    };
    DataService.prototype.getVacation = function (id) {
        return this.http.get(this.vacationUrl + '/' + id);
    };
    DataService.prototype.addVacation = function (vacation) {
        return this.http.post(this.vacationUrl, vacation);
    };
    DataService.prototype.updateVacation = function (vacation) {
        return this.http.put(this.vacationUrl, vacation);
    };
    DataService.prototype.deleteVacation = function (id) {
        return this.http.delete(this.vacationUrl + '/' + id);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map