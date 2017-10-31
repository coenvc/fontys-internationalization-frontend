import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TinyEditorComponent } from 'components/tiny-editor/tiny-editor.component';
import { KioskComponent } from 'components/kiosk/kiosk.component';
import { HeaderComponent } from 'components/header/header.component';
import {routing} from 'app/app.routes';
import { MapComponent } from 'components/map/map.component';
import { BlogComponent } from 'components/blog/blog.component';
import { DetailComponent } from 'components/detail-page/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent,
    HeaderComponent,
    MapComponent,
    BlogComponent,
    DetailComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
