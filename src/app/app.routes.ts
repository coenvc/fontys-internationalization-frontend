import {RouterModule, Routes} from '@angular/router';
import {KioskComponent} from 'components/kiosk/kiosk.component';
import {TinyEditorComponent} from 'components/tiny-editor/tiny-editor.component';
import {BlogComponent} from 'components/blog/blog.component';
import {LoginComponent} from '../components/login/login.component';
import {DetailComponent} from '../components/detail-page/detail.component';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'kiosk', component: KioskComponent},
  {path: 'tiny-editor', component: TinyEditorComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'detail-page', component: DetailComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
