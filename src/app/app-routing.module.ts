import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'spline-viewer', 
    loadChildren: () => import('./Components/spline-viewer/spline-viewer.component').then(m => m.SplineViewerComponent) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
