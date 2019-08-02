import {BoiteaoutilsComponent} from './boiteaoutils.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MachineComponent} from './machine/machine.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {PiecesComponent} from './pieces/pieces.component';
import {SoustraitantComponent} from './soustraitant/soustraitant.component';
import {FournisseurComponent} from './fournisseur/fournisseur.component';
import {RefreshMachineComponent} from './machine/refresh-machine/refresh-machine.component';
import {RefreshPersonnelComponent} from './personnel/refresh-personnel/refresh-personnel.component';
import {RefreshPieceComponent} from './pieces/refresh-piece/refresh-piece.component';
import {OutillageComponent} from './outillage/outillage.component';
import {RefreshOutillageComponent} from './outillage/refresh-outillage/refresh-outillage.component';
import {RefreshFournisseurComponent} from './fournisseur/refresh-fournisseur/refresh-fournisseur.component';

const routes: Routes = [{
  path: '',
  component: BoiteaoutilsComponent,
  children: [
    {
      path: 'machine',
      component: MachineComponent,
    },
    {
      path: 'refreshMachine',
      component: RefreshMachineComponent,
    },
    {
      path: 'personnel',
      component: PersonnelComponent,
    },
    {
    path: 'refreshPersonnel',
  component: RefreshPersonnelComponent,
    },
    {
      path: 'pieces',
      component: PiecesComponent,
    },
    {
      path: 'refreshPiece',
      component: RefreshPieceComponent,
    },
    {
      path: 'outillage',
      component: OutillageComponent,
    },
    {
      path: 'refreshOutillage',
      component: RefreshOutillageComponent,
    },

    {
      path: 'soustraitant',
      component: SoustraitantComponent,
    },

    {
      path: 'fournisseur',
      component: FournisseurComponent,
    },

    {
      path: 'refreshFournisseur',
      component: RefreshFournisseurComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoiteaoutilsRoutingModule {
}
