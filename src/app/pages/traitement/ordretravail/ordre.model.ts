import {DemandeModel} from '../demandeintervention/demande.model';
import {MachineModel} from '../../boiteaoutils/machine/machine.model';
import {PiecesModel} from '../../boiteaoutils/pieces/pieces.model';

export class OrdreModel {
  idOrdre: number;
  numOrdre: number;
  module: string;
  dateOT: Date;
  dateFin: Date;
  typeMaintenance: string;
  niveauMaintenance: number;
  criticite: string;
  demande: DemandeModel;
  machine: MachineModel;
  piece: PiecesModel;

}
