import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EstudianteDetailComponent } from "./components/estudiante-detail/estudiante-detail.component";
import { EstudianteListComponent } from "./components/estudiante-list/estudiante-list.component";

const routes: Routes = [
  { path: "", component: EstudianteListComponent },
  {
    path: ":id",
    component: EstudianteDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteRoutingModule {}
