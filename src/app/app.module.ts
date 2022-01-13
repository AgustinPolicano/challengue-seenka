import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryDialogComponent } from './components/gallery/gallery-dialog/gallery-dialog/gallery-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { TableUsersComponent } from './components/table-users/table-users.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryDialogComponent,
    TableUsersComponent
  ],
  imports: [
   RouterModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
