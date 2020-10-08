import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { TechsComponent } from '../../pages/techs/techs.component';
import { TechsRoutingModule } from './techs-routing.module';



@NgModule({
  declarations: [
    TechsComponent
  ],
  exports: [
    TechsComponent
  ],
  imports: [
    TechsRoutingModule,
    CommonModule
  ]
})

export class TechsModule { }
