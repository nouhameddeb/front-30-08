import {MachineModel} from '../../boiteaoutils/machine/machine.model';

export class DemandeModel {
  idDemande: number;
  emission: number;
  dateDemande: Date;
  demandeur: string;
  tel: number;
  datesouhaite: Date;
  typePanne: string;
  causePanne: string;
  etatDemande: string;
  realisepar: string;
  localisationDemande: string;
  descDemande: string;
  machine: MachineModel;

}
