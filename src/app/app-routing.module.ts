import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

const routes: Routes = [
  { path :  "", component: PageOneComponent},
  { path: "page-two", component: PageTwoComponent },
  { path: "page-three", component: PageThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
