import {RouterModule, Routes} from '@angular/router';
import {KioskComponent} from 'components/kiosk/kiosk.component';
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {BlogComponent} from 'components/blog/blog.component';
import {HomeComponent} from 'components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {DetailComponent} from '../components/detail-page/detail.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'kiosk', component: KioskComponent},
  {path: 'tiny-editor', component: TinyEditorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail-page', component: DetailComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
