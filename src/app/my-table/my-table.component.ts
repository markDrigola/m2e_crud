import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {MyTableDataSource, MyTableItem} from './my-table-datasource';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  tableSourse: MyTableDataSource;
  dataSource: MyTableItem[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.tableSourse = new MyTableDataSource(this.paginator, this.sort, this.http);

    this.tableSourse.getData().subscribe((tasks: MyTableItem[]) => {
      this.dataSource = tasks;
    });
  }
}
