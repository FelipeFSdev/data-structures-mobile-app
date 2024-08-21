import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertionSortPage } from './insertion-sort.page';

const routes: Routes = [
  {
    path: '',
    component: InsertionSortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertionSortPageRoutingModule {}
