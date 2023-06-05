import { Injectable } from '@angular/core';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

profile: Profile[]= [ {
  id: 1,
  pseudo: 'Zefren',
  pass: 'Admin123',
  bio: 'J aime les films lents, mon réalisateur préféré est Edward Yang.',
  filmsVu: 5,
  imageUrl: 'https://eastasia.fr/wp-content/uploads/2020/12/kids-return-1-710x473.jpg',
  filmpref1: 'Kids Return',
  filmpref2: 'A Moment of Romance',
  filmpref3: 'Blade Runner',
  filmpref4: 'Hard Boiled'
},
{
  id: 2,
  pseudo: 'admin',
  pass: 'admin123',
  bio: 'blablabla',
  filmsVu: 1,
  imageUrl: 'string',
  filmpref1: 'string',
  filmpref2: 'string',
  filmpref3: 'string',
  filmpref4: 'string'
}
];

  constructor() {}

    getAllProfile():Profile[]{
    return this.profile;
    }

    getProfileByPseudo(pseudo: string | null):Profile{
      const profile = this.profile.find(profile => profile.pseudo === pseudo);
      if (!profile) {
          throw new Error('Profil introuvable');
      } else {
          return profile;
      }
    }
}
