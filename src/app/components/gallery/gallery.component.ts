import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersTable } from 'src/app/models/table.model';
import { UsersService } from 'src/app/services/users.service';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryData!: any;
  constructor(private service: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getUsers().subscribe(res => {
      this.galleryData = res.results;
    })
  }

  openDialog(userData: any){
    this.dialog.open(GalleryDialogComponent, {
      data: userData
    })
  }
}
