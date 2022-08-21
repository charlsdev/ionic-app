import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajePageRoutingModule } from './personaje-routing.module';

import { PersonajePage } from './personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajePageRoutingModule
  ],
  declarations: [PersonajePage]
})
export class PersonajePageModule {}
