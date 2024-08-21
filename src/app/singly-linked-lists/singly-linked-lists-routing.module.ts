import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglyLinkedListsPage } from './singly-linked-lists.page';

const routes: Routes = [
  {
    path: '',
    component: SinglyLinkedListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglyLinkedListsPageRoutingModule {}
