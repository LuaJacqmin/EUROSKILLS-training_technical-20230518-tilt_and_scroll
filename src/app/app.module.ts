import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageSectionComponent } from './pages/components/page-section/page-section.component';
@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageOneComponent,
    PageSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
