import { SegundoComComponent } from './components/segundo-com/segundo-com.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  { path: 'primeiro-componente', component: DataBindingComponent},
  { path: 'segundo-componente', component: SegundoComComponent},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
