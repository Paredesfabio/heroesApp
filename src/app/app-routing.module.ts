import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { PublicGuard } from '@auth/guards/public.guard';
import { NotFoundPageComponent } from '@shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ PublicGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule) },
  {
    path: 'heroes',
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ],
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule)
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
