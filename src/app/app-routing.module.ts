import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/profesor',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: SkeletonComponent,
    children: [
      {
        path: 'profesor',
        loadChildren: () =>
          import('@feature/profesor/profesor.module').then(
            (m) => m.ProfesorModule
          ),
      },
      {
        path: 'estudiante',
        loadChildren: () =>
          import('@feature/estudiante/estudiante.module').then(
            (m) => m.EstudianteModule
          ),
      },
      {
        path: '**',
        redirectTo: '/dashboard/profesor',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'estudiante',
    loadChildren: () =>
      import('@feature/estudiante/estudiante.module').then(
        (m) => m.EstudianteModule
      ),
  },

  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
