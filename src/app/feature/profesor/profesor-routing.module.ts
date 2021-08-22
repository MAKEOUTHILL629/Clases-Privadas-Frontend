import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorDetailComponent } from './profesor-detail/profesor-detail.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
//import { LayoutComponent } from '@core/components/layout/layout.component';
//import { SecurityGuard } from '@core/guard/security.guard';




const routes: Routes = [
  {
    path: '',
    component: ProfesorListComponent,
  },
  {
    path: ':id',
    component: ProfesorDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
