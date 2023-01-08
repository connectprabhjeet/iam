import { RouterModule, Routes } from '@angular/router';

import { LOGIN_ROOT } from './login.constants';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: LOGIN_ROOT,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
