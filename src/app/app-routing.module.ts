import { TelaDeDadosPage } from './tela-de-dados/tela-de-dados.page';
import { SegundoComComponent } from './components/segundo-com/segundo-com.component';
import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'segundo-componente', component: SegundoComComponent},
  {path: 'tela-de-dados', component: TelaDeDadosPage},

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tela-de-dados',
    loadChildren: () => import('/Users/sbragaal/ProjecANM/src/app/tela-de-dados/tela-de-dados.module').then( m => m.TelaDeDadosPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
