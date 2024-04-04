import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  urlAPI = environment.baseAPI+'table.json';
  constructor(private _httpClient: HttpClient) { }

  getAllTables():Observable<Array<Table>>{
    return this._httpClient.get<Array<Table>>(this.urlAPI);

  }
}
