import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglyLinkedListsPageRoutingModule } from './singly-linked-lists-routing.module';

import { SinglyLinkedListsPage } from './singly-linked-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglyLinkedListsPageRoutingModule
  ],
  declarations: [SinglyLinkedListsPage]
})
export class SinglyLinkedListsPageModule {}
