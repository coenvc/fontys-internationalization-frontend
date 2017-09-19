import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TinyEditorComponent } from 'components/tiny-editor/tiny-editor.component';
import { KioskComponent } from 'components/kiosk/kiosk.component';

const appRoutes : Routes =[
  {path: 'kiosk', component: KioskComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    TinyEditorComponent,
    KioskComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
