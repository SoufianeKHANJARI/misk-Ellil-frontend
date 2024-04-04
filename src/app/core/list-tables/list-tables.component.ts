import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { TableComponent } from '../table/table.component';
import { Table } from '../../models/table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-list-tables',
  standalone: true,
  imports: [MatGridListModule, TableComponent],
  templateUrl: './list-tables.component.html',
  styleUrl: './list-tables.component.scss'
})
export class ListTablesComponent {
  tables!: Array<Table>;
  constructor( private _tableService: TableService){}

  ngOnInit(){
    this._tableService.getAllTables().subscribe(
      data => this.tables = data 
    )
  }
}
