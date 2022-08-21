import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOptionsPageRoutingModule } from './list-options-routing.module';

import { ListOptionsPage } from './list-options.page';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListOptionsPageRoutingModule
   ],
   declarations: [ListOptionsPage]
})
export class ListOptionsPageModule {}
