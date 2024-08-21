import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StacksPage } from './stacks.page';

const routes: Routes = [
  {
    path: '',
    component: StacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StacksPageRoutingModule {}
