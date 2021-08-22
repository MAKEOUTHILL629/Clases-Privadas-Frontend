import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { features } from 'process';
//import { LayoutComponent } from '@core/components/layout/layout.component';
//import { SecurityGuard } from '@core/guard/security.guard';
import { SkeletonComponent } from "./layout/skeleton/skeleton.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/profesor',
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    component: SkeletonComponent,
    children: [
      {
        path: "profesor",
        loadChildren: () =>
          import("./feature/profesor/profesor.module").then(
            (m) => m.ProfesorModule
          ),
      },
      {
        path: '**',
        redirectTo: '/dashboard/profesor',
        pathMatch: 'full'
      }
    ],
  },

  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '/home',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'home',
  //       loadChildren: ()=> import('./feature/home/home.module').then(m => m.HomeModule),
  //       canActivate: [SecurityGuard]
  //     },
  //   ]
  // },

  // { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
