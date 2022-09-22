import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DulcesComponent } from './dulces/dulces.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dulces",
    pathMatch: "full"
  },
  {
    path: "dulces",
    component: DulcesComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
