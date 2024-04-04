import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [EmployeeComponent, MatGridListModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent {
  employees!: Array<Employee>;
  
  constructor(private _employeeService: EmployeeService){}

  ngOnInit(){
    this._employeeService.getAllEmployees().subscribe(
      data => {
        this.employees= data;
      }
    )
  }
}
