import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UsersTable } from './models/table.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'challengue-seenka';
  form!: FormGroup;
  dataSource = new MatTableDataSource<UsersTable>();
  constructor(private fb: FormBuilder, private service: UsersService){

  }

  ngOnInit(): void {
    this.initForm()
    
  }

  initForm(){
    this.form = this.fb.group({
      sliderState : false
    })
    this.getData();
  }

  getData(){
    this.service.getUsersTable().subscribe(res => {
      this.dataSource.data = res.results
    })
  }

}

