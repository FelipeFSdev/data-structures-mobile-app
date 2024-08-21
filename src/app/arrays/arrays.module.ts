import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraysPageRoutingModule } from './arrays-routing.module';

import { ArraysPage } from './arrays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraysPageRoutingModule
  ],
  declarations: [ArraysPage]
})
export class ArraysPageModule {}
