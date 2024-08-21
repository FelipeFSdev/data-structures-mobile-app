import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArraysPage } from './arrays.page';

const routes: Routes = [
  {
    path: '',
    component: ArraysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArraysPageRoutingModule {}
