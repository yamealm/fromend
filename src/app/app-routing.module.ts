import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/appComponent', pathMatch: 'full' },
    { path:'appComponent', component : AppComponent}
  ];

 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
