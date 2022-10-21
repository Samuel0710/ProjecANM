import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDeDadosPage } from './tela-de-dados.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDeDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDeDadosPageRoutingModule {}
