import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule, MatCardActions, MatChipsModule ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  @Input() employee !: Employee;

  constructor(private _employeeService :EmployeeService){}

  changerStatut(){
    console.log(this.employee.status);
    this._employeeService.updateStatutEmployee(this.employee);
    console.log(this.employee.status);

  }

}
