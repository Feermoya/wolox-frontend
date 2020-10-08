import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechsComponent } from 'src/app/components/pages/techs/techs.component';


const routes: Routes = [
  {
    path: '',
    component: TechsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechsRoutingModule { }
