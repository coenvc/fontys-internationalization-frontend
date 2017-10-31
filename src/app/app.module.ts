// Angular components
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

// Globally used components
import {AppComponent} from './app.component';
import {routing} from 'app/app.routes';
import {HttpClientService} from "./database/HttpClientService";

// Developed components
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {KioskComponent} from 'components/kiosk/kiosk.component';
import {HeaderComponent} from 'components/header/header.component';
import {MapComponent} from 'components/map/map.component';
import {BlogComponent} from 'components/blog/blog.component';
import {LoginComponent} from "../components/login/login.component";
import {DetailComponent} from "../components/detail-page/detail.component"

// DataServices
import {LoginDataservice} from "./database/login.dataservice";
import {BlogDataservice} from "./database/blog.dataservice";
import {UserDataservice} from "./database/user.dataservice";

@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent,
    HeaderComponent,
    MapComponent,
    BlogComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClientService,
    LoginDataservice,
    BlogDataservice,
    UserDataservice],
  bootstrap: [AppComponent]
})

export class AppModule {
}
