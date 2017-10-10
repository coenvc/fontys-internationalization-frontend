import {RouterModule, Routes} from '@angular/router';
import {KioskComponent} from 'components/kiosk/kiosk.component';

const APP_ROUTES: Routes = [
  {path: 'kiosk', component: KioskComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
