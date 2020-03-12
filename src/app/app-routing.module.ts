import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'canary-h',
    loadChildren: () => import('./pages/canary-h/canary-h.module').then( m => m.CanaryHPageModule)
  },
  {
    path: 'triana',
    loadChildren: () => import('./pages/triana/triana.module').then( m => m.TrianaPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'end-game',
    loadChildren: () => import('./pages/end-game/end-game.module').then( m => m.EndGamePageModule)
  },
  {
    path: 'monumentlist',
    loadChildren: () => import('./pages/monumentlist/monumentlist.module').then( m => m.MonumentlistPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
