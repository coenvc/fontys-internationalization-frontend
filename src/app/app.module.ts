import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TinyEditorComponent } from 'components/tiny-editor/tiny-editor.component';
import { KioskComponent } from 'components/kiosk/kiosk.component';
import { HeaderComponent } from 'components/header/header.component';
import {routing} from 'app/app.routes';
import { MapComponent } from 'components/map/map.component';
import { BlogComponent } from 'components/blog/blog.component';
import { HomeComponent } from 'components/home/home.component';
import { AgmCoreModule } from '@agm/core';  
@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent,
    HeaderComponent,
    MapComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgXuDBIRhbd5dQA7uI2HY1lY2l_UyZqP0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
