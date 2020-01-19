import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';
import {RefresherComponent} from '../refresher/refresher.component'
import {ActionElementComponent} from '../action-element/action-element.component'
import { StorePage } from './store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule
  ],
  declarations: [StorePage,RefresherComponent,ActionElementComponent]
})
export class StorePageModule {}
