import { Education } from '../components/services/data.model';

export const EDUCATIONS: Education[] = [
  {
    startDate: '2005',
    endDate: '2010',
    school: 'Université de Mons (UMONS)',
    schoolUrl: 'http://www.umons.ac.be',
    cursus: 'Master en Sciences Informatiques',
    projects: [
      { type: 'Mémoire', title: 'Software Architecture, Evolution, and the COSA Metamodel', url: '' },
      { type: 'Projet', title: 'Plateforme de gestion des stages” (PHP)', url: '' }
    ]
  },
  {
    startDate: '1999',
    endDate: '2005',
    school: 'Athénée Provincial de La Louvière (APLL)',
    schoolUrl: 'http://www.ecoles.cfwb.be/aplalouviere/',
    cursus: 'Sciences - Mathématiques',
    projects: []
  },
];
