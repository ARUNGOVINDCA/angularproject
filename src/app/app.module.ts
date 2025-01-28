import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentComponent } from './componentt/component/component.component';
import { ClickResultComponent } from './componentt/click-result/click-result.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  declarations: [AppComponent, ComponentComponent, ClickResultComponent,CoursesComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)], 
  bootstrap: [AppComponent]
})
export class AppModule { }