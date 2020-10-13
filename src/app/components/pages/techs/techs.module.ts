
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { TechsRoutingModule } from './techs-routing.module';
import { TechsComponent } from './techs.component';
import { OrderNamePipe } from '../../../pipe/order-name.pipe';
import { SearchPipe } from '../../../pipe/search.pipe';


@NgModule({
  declarations: [
    TechsComponent,
    OrderNamePipe,
    SearchPipe,
  ],
  exports: [
    TechsComponent,
    OrderNamePipe,
    SearchPipe,
  ],
  imports: [
    TechsRoutingModule,
    CommonModule,
    FormsModule,

  ]
})

export class TechsModule { }
