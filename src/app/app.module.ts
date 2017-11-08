// Angular components
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Globally used components
import {AppComponent} from './app.component';
import {routing} from 'app/app.routes';
import { MapComponent } from 'components/map/map.component';
import { BlogComponent } from 'components/blog/blog.component';
import { HomeComponent } from 'components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {HttpClientService} from './database/HttpClientService';

// Developed components
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {KioskComponent} from 'components/kiosk/kiosk.component';
import {HeaderComponent} from 'components/header/header.component';
import {LoginComponent} from '../components/login/login.component';
import {DetailComponent} from '../components/detail-page/detail.component'

// DataServices
import {LoginDataservice} from './database/login.dataservice';
import {BlogDataservice} from './database/blog.dataservice';
import {UserDataservice} from './database/user.dataservice';
import { SchoolService } from 'app/database/school.dataservice';

// QR Code
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent,
    HeaderComponent,
    MapComponent,
    BlogComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgXuDBIRhbd5dQA7uI2HY1lY2l_UyZqP0'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    QRCodeModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [HttpClientService,
    LoginDataservice,
    BlogDataservice,
    UserDataservice,
    SchoolService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
