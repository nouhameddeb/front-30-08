import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {TraitementComponent} from './traitement.component';
import {TraitementRoutingModule} from './traitement-routing.module';
import { DemandeinterventionComponent } from './demandeintervention/demandeintervention.component';
import { OrdretravailComponent } from './ordretravail/ordretravail.component';
import { PlanmaintenanceComponent } from './planmaintenance/planmaintenance.component';
import { RapportinterventionComponent } from './rapportintervention/rapportintervention.component';
import { PreventiveComponent } from './preventive/preventive.component';
import { CorrectiveComponent } from './corrective/corrective.component';
import { ConditionnelleComponent } from './conditionnelle/conditionnelle.component';
import { ContratsComponent } from './contrats/contrats.component';
import { FacturesComponent } from './factures/factures.component';
import { ModalOrdretravailComponent } from './ordretravail/modal-ordretravail/modal-ordretravail.component';
import { RefreshOrdretravailComponent } from './ordretravail/refresh-ordretravail/refresh-ordretravail.component';
import { ShowOrdretravailComponent } from './ordretravail/show-ordretravail/show-ordretravail.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbWindowModule} from '@nebular/theme';
import { ModalDemandeComponent } from './demandeintervention/modal-demande/modal-demande.component';
import { ShowDemandeComponent } from './demandeintervention/show-demande/show-demande.component';
import { RefreshDemandeComponent } from './demandeintervention/refresh-demande/refresh-demande.component';
import { ModalContratComponent } from './contrats/modal-contrat/modal-contrat.component';
import { ShowContratComponent } from './contrats/show-contrat/show-contrat.component';
import { RefreshContratComponent } from './contrats/refresh-contrat/refresh-contrat.component';
import { ModalFactureComponent } from './factures/modal-facture/modal-facture.component';
import { ShowFactureComponent } from './factures/show-facture/show-facture.component';
import { RefreshFactureComponent } from './factures/refresh-facture/refresh-facture.component';

@NgModule({
  imports: [
    ThemeModule,
    TraitementRoutingModule,
    Ng2SmartTableModule,
    NbWindowModule.forChild(),
  ],
  declarations: [
    TraitementComponent,
    DemandeinterventionComponent,
    OrdretravailComponent,
    PlanmaintenanceComponent,
    RapportinterventionComponent,
    PreventiveComponent,
    CorrectiveComponent,
    ConditionnelleComponent,
    ContratsComponent,
    FacturesComponent,
    ModalOrdretravailComponent,
    RefreshOrdretravailComponent,
    ShowOrdretravailComponent,
    ModalDemandeComponent,
    ShowDemandeComponent,
    RefreshDemandeComponent,
    ModalContratComponent,
    ShowContratComponent,
    RefreshContratComponent,
    ModalFactureComponent,
    ShowFactureComponent,
    RefreshFactureComponent,

  ],
  providers: [

  ],
  entryComponents: [
    ModalDemandeComponent,
    ShowDemandeComponent,
    RefreshDemandeComponent,
    ModalOrdretravailComponent,
    ShowOrdretravailComponent,
    RefreshOrdretravailComponent,
    ModalFactureComponent,
    ShowFactureComponent,
    RefreshFactureComponent,
  ],
})
export class TraitementModule { }
