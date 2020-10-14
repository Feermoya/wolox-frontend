import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { OpenGuard } from './guards/open.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    canActivate: [CheckLoginGuard],
    component: LoginComponent
  },
  {
    path: 'techs',
    canActivate: [OpenGuard],
    loadChildren: './components/pages/techs/techs.module#TechsModule'

  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
