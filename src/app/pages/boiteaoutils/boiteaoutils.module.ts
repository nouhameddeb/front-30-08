import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {BoiteaoutilsRoutingModule} from './boiteaoutils-routing.module';
import {BoiteaoutilsComponent} from './boiteaoutils.component';
import { MachineComponent } from './machine/machine.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PiecesComponent } from './pieces/pieces.component';
import { SoustraitantComponent } from './soustraitant/soustraitant.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ModalMachineComponent } from './machine/modal-machine/modal-machine.component';
import { RefreshMachineComponent } from './machine/refresh-machine/refresh-machine.component';
import { ShowMachineComponent } from './machine/show-machine/show-machine.component';
import {NbWindowModule} from '@nebular/theme';
import { ModalPersonnelComponent } from './personnel/modal-personnel/modal-personnel.component';
import { RefreshPersonnelComponent } from './personnel/refresh-personnel/refresh-personnel.component';
import { ShowPersonnelComponent } from './personnel/show-personnel/show-personnel.component';
import { ModalPieceComponent } from './pieces/modal-piece/modal-piece.component';
import { RefreshPieceComponent } from './pieces/refresh-piece/refresh-piece.component';
import { ShowPieceComponent } from './pieces/show-piece/show-piece.component';
import { OutillageComponent } from './outillage/outillage.component';
import { ModalOutillageComponent } from './outillage/modal-outillage/modal-outillage.component';
import { RefreshOutillageComponent } from './outillage/refresh-outillage/refresh-outillage.component';
import { ShowOutillageComponent } from './outillage/show-outillage/show-outillage.component';
import { ModalFournisseurComponent } from './fournisseur/modal-fournisseur/modal-fournisseur.component';
import { ShowFournisseurComponent } from './fournisseur/show-fournisseur/show-fournisseur.component';
import { RefreshFournisseurComponent } from './fournisseur/refresh-fournisseur/refresh-fournisseur.component';

@NgModule({
  imports: [
    ThemeModule,
    BoiteaoutilsRoutingModule,
    Ng2SmartTableModule,
    NbWindowModule.forChild(),
  ],
  declarations: [
    BoiteaoutilsComponent,
    MachineComponent,
    PersonnelComponent,
    PiecesComponent,
    SoustraitantComponent,
    FournisseurComponent,
    ModalMachineComponent,
    RefreshMachineComponent,
    ShowMachineComponent,
    ModalPersonnelComponent,
    RefreshPersonnelComponent,
    ShowPersonnelComponent,
    ModalPieceComponent,
    RefreshPieceComponent,
    ShowPieceComponent,
    OutillageComponent,
    ModalOutillageComponent,
    RefreshOutillageComponent,
    ShowOutillageComponent,
    ModalFournisseurComponent,
    ShowFournisseurComponent,
    RefreshFournisseurComponent,
  ],
  providers: [
  ],
  entryComponents: [
    ModalMachineComponent,
    ShowMachineComponent,
    ModalPersonnelComponent,
    ShowPersonnelComponent,
    ModalPieceComponent,
    ShowPieceComponent,
    ModalOutillageComponent,
    ShowOutillageComponent,
    ModalFournisseurComponent,
    ShowFournisseurComponent,
  ],
})
export class BoiteaoutilsModule { }
