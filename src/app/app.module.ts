import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TinyEditorComponent } from 'components/tiny-editor/tiny-editor.component';
import { KioskComponent } from 'components/kiosk/kiosk.component';
import { HeaderComponent } from 'components/header/header.component';
import {routing} from 'app/app.routes';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent,
    HeaderComponent,
    MapComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
