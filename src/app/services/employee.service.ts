import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  // urlAPI = environment.baseAPI+'employee.json';
  urlAPI = environment.baseAPI+'employees';
  constructor(private _httpClient: HttpClient) { }

  getAllEmployees():Observable<Array<Employee>>{
    return this._httpClient.get<Array<Employee>>(this.urlAPI);
  }

  updateStatutEmployee(emp : Employee):Observable<Employee>{
    console.log(emp);
    return this._httpClient.post<Employee>(this.urlAPI+"/edit",emp);
  }

}
