import { Injectable } from '@angular/core';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

profile: Profile[]= [ {
  id: 1,
  pseudo: 'Zefren',
  pass: 'Test123',
  bio: 'blablabla',
  filmsVu: 5,
  imageUrl: 'string'
},
{
  id: 2,
  pseudo: 'admin',
  pass: 'admin123',
  bio: 'blablabla',
  filmsVu: 1,
  imageUrl: 'string'
}
];

  constructor() {}

    getAllProfile():Profile[]{
    return this.profile;
    }
}
