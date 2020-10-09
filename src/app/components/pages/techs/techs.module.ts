
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { TechsRoutingModule } from './techs-routing.module';
import { TechsComponent } from './techs.component';



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
