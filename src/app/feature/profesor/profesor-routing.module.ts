import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfesorDetailComponent } from "./components/profesor-detail/profesor-detail.component";
import { ProfesorListComponent } from "./components/profesor-list/profesor-list.component";

const routes: Routes = [
  {
    path: "",
    component: ProfesorListComponent,
  },
  {
    path: ":id",
    component: ProfesorDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorRoutingModule {}
