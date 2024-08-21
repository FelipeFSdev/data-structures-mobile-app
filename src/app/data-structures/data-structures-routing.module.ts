import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataStructuresPage } from './data-structures.page';

const routes: Routes = [
  {
    path: '',
    component: DataStructuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataStructuresPageRoutingModule {}
