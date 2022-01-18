import { NotFoundComponent } from './not-found/not-found.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'utilities',
    loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
