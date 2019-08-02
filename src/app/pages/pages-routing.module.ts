import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {ParametreComponent} from './parametre/parametre.component';
import {DocumentsComponent} from './documents/documents.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'boiteaoutils',
    loadChildren: './boiteaoutils/boiteaoutils.module#BoiteaoutilsModule',
  },
    {
      path: 'traitement',
      loadChildren: './traitement/traitement.module#TraitementModule',
    },
    {
      path: 'documents',
      component: DocumentsComponent,
    },
       {
      path: 'parametre',
      component: ParametreComponent,
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
    {
    path: '**',
    component: NotFoundComponent,
  }, {
      path: 'parametre',
      component: ParametreComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
