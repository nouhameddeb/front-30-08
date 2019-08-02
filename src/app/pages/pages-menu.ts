import { NbMenuItem } from '@nebular/theme';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Boîte à outils',
    icon: 'nb-e-commerce',
    children: [
      {
        title: 'Machine',
        link: '/pages/boiteaoutils/machine',
      },
      {
        title: 'Personnel',
        link: '/pages/boiteaoutils/personnel',
      },
      {
        title: 'Pièces',
        link: '/pages/boiteaoutils/pieces',
      },
      {
        title: 'Outillage',
        link: '/pages/boiteaoutils/outillage',
      },

      {
        title: 'Sous-traitant',
        link: '/pages/boiteaoutils/soustraitant',
      },

      {
        title: 'Fournisseur',
        link: '/pages/boiteaoutils/fournisseur',
      },
    ],
  },

  {
    title: 'Traitement',
    icon: 'nb-e-commerce',
    children: [
      {
        title: 'Demande intervention',
        link: '/pages/traitement/demandeintervention',
      },
      {
        title: 'Ordre de travail',
        link: '/pages/traitement/ordretravail',
      },
      {
        title: 'Plan de maintenance',
        link: '/pages/traitement/planmaintenance',
      },

      {
        title: 'Rapport intervention',
        link: '/pages/traitement/rapportintervention',
      },

      {
        title: 'Maintenance préventive',
        link: '/pages/traitement/preventive',
      },

      {
        title: 'Maintenance corrective',
        link: '/pages/traitement/corrective',
      },

      {
        title: 'Maintenance conditionnelle',
        link: '/pages/traitement/conditionnelle',
      },

      {
        title: 'Contrats de maintenance',
        link: '/pages/traitement/contrats',
      },

      {
        title: 'Factures',
        link: '/pages/traitement/factures',
      },
      ],

  },
  {
    title: 'Documents',
    icon: 'nb-compose',
    link: '/pages/documents',
  },
];

