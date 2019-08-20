var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/EmployeeList/employee-list.component';
import { EmployeeCreateComponent } from './Components/EmployeeCreate/employee-create.component';
import { EmployeeEditComponent } from './Components/EmployeeEdit/employee-edit.component';
import { NotFoundComponent } from './Components/NotFound/not-found.component';
import { EmployeeFormComponent } from './Components/EmployeeForm/employee-form.component';
import { DataService } from './Services/data.service';
import { VacationAddComponent } from './Components/VacationAdd/vacation-add.component';
import { VacationFormComponent } from './Components/VacationForm/vacation-form.component';
import { VacationListComponent } from './Components/VacationList/vacation-list.component';
import { VacationEditComponent } from './Components/VacationEdit/vacation-edit.component';
var appRoutes = [
    { path: '', component: EmployeeListComponent },
    { path: 'createemployee', component: EmployeeCreateComponent },
    { path: 'editemployee/:id', component: EmployeeEditComponent },
    { path: 'addvacation', component: VacationAddComponent },
    { path: 'vacationlist/editvacation/:id', component: VacationEditComponent },
    { path: 'vacationlist', component: VacationListComponent },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                AppComponent,
                EmployeeListComponent,
                EmployeeCreateComponent,
                EmployeeEditComponent,
                EmployeeFormComponent,
                NotFoundComponent,
                VacationAddComponent,
                VacationFormComponent,
                VacationListComponent,
                VacationEditComponent
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map