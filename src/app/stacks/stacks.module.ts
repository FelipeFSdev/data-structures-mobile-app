import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StacksPageRoutingModule } from './stacks-routing.module';

import { StacksPage } from './stacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StacksPageRoutingModule
  ],
  declarations: [StacksPage]
})
export class StacksPageModule {}
