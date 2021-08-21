import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ProfesorDetailComponent } from './profesor-detail/profesor-detail.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorRoutingModule } from './profesor-routing.module';



@NgModule({
  declarations: [
    ProfesorDetailComponent,
    ProfesorListComponent
  ],
  imports: [
    SharedModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
