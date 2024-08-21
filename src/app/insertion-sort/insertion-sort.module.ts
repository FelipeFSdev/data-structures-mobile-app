import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertionSortPageRoutingModule } from './insertion-sort-routing.module';

import { InsertionSortPage } from './insertion-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertionSortPageRoutingModule
  ],
  declarations: [InsertionSortPage]
})
export class InsertionSortPageModule {}
