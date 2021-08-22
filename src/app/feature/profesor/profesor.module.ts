import { NgModule } from '@angular/core';


import { SharedModule } from '@shared/shared.module';
import { ProfesorDetailComponent } from './components/profesor-detail/profesor-detail.component';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';
import { ProfesorRoutingModule } from './profesor-routing.module';



@NgModule({
  declarations: [
    ProfesorDetailComponent,
    ProfesorListComponent
  ],
  imports: [
    SharedModule,
    ProfesorRoutingModule,
  ]
})
export class ProfesorModule { }
