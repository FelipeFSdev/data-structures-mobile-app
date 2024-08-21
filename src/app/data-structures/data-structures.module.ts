import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataStructuresPageRoutingModule } from './data-structures-routing.module';

import { DataStructuresPage } from './data-structures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataStructuresPageRoutingModule
  ],
  declarations: [DataStructuresPage]
})
export class DataStructuresPageModule {}
