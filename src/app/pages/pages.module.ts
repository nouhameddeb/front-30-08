import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ParametreModule} from './parametre/parametre.module';

import {BoiteaoutilsModule} from './boiteaoutils/boiteaoutils.module';
import {TraitementModule} from './traitement/traitement.module';
import {DocumentsComponent} from './documents/documents.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ECommerceModule,
    MiscellaneousModule,
    ParametreModule,
    BoiteaoutilsModule,
    TraitementModule,


  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DocumentsComponent,
  ],
})
export class PagesModule {
}
