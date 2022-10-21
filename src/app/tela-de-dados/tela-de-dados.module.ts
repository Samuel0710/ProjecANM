import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDeDadosPageRoutingModule } from './tela-de-dados-routing.module';

import { TelaDeDadosPage } from './tela-de-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDeDadosPageRoutingModule
  ],
  declarations: [TelaDeDadosPage]
})
export class TelaDeDadosPageModule {}
