import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/EmployeeList/employee-list.component';
import { EmployeeCreateComponent } from './Components/EmployeeCreate/employee-create.component';
import { EmployeeEditComponent } from './Components/EmployeeEdit/employee-edit.component';
import { NotFoundComponent } from './Components/NotFound/not-found.component';
import { EmployeeFormComponent } from './Components/EmployeeForm/employee-form.component';
import { DataService } from './Services/data.service';
import { VacationAddComponent } from './Components/VacationAdd/vacation-add.component';
import { from } from 'rxjs';
import { VacationFormComponent } from './Components/VacationForm/vacation-form.component';
import { VacationListComponent } from './Components/VacationList/vacation-list.component';
import { VacationEditComponent } from './Components/VacationEdit/vacation-edit.component';

const appRoutes: Routes = [   
    { path: '', component: EmployeeListComponent },
    { path: 'createemployee', component: EmployeeCreateComponent },
    { path: 'editemployee/:id', component: EmployeeEditComponent },
    { path: 'addvacation', component: VacationAddComponent },
    { path: 'vacationlist/editvacation/:id', component: VacationEditComponent },
    { path: 'vacationlist', component: VacationListComponent },
    { path: '**', component: NotFoundComponent }  
];

@NgModule({
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
export class AppModule { }