import { Routes } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { ListTablesComponent } from './core/list-tables/list-tables.component';
import { ListEmployeesComponent } from './core/list-employees/list-employees.component';

export const routes: Routes = [
    {path: "tables" , component: ListTablesComponent},
    {path: "employees" , component: ListEmployeesComponent},
];
