import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {MyTableComponent} from './my-table/my-table.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'table', component: MyTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
