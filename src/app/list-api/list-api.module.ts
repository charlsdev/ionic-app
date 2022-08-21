import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListApiPageRoutingModule } from './list-api-routing.module';

import { ListApiPage } from './list-api.page';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListApiPageRoutingModule
   ],
   declarations: [ListApiPage]
})
export class ListApiPageModule {}
