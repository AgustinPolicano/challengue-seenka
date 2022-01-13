import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersTable } from 'src/app/models/table.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
 @Input() dataSource = new MatTableDataSource<UsersTable>();
 displayedColumns = ['gender', 'phone', 'nat', 'name', 'location'];

  constructor() { }

  ngOnInit() {
  }

}
