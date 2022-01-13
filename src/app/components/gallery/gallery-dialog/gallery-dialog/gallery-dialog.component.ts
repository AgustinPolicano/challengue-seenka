import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.css']
})
export class GalleryDialogComponent implements OnInit {
  userData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.userData = data;
  }

  ngOnInit() {
  }

}
