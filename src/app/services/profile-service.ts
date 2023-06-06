import { Injectable } from '@angular/core';
import { Profile } from '../models/Profile';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, switchMap } from 'rxjs';

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
  filmpref1: 1,
  filmpref2: 1,
  filmpref3: 1,
  filmpref4: 1
},
{
  id: 2,
  pseudo: 'Sophie',
  pass: 'Admin123',
  bio: '',
  filmsVu: 12,
  imageUrl: 'https://a.ltrbxd.com/resized/avatar/upload/3/3/7/3/2/5/shard/avtr-0-1000-0-1000-crop.jpg?v=1d19016187',
  filmpref1: 1,
  filmpref2: 1,
  filmpref3: 1,
  filmpref4: 1
},
{
  id: 3,
  pseudo: 'Damien10',
  pass: 'Admin123',
  bio: 'New York s original cinema eatery, an Independent movie house bringing a selective approach to food, film and drinks.',
  filmsVu: 42,
  imageUrl: 'https://secure.gravatar.com/avatar/e8279da79f0a3720eca0b44a34fca9e2?rating=PG&size=1000&border=&default=https%3A%2F%2Fs.ltrbxd.com%2Fstatic%2Fimg%2Favatar1000.a71b6e9c.png',
  filmpref1: 1,
  filmpref2: 1,
  filmpref3: 1,
  filmpref4: 1
},
{
  id: 4,
  pseudo: 'Toto',
  pass: 'Admin123',
  bio: 'Je suis étudiant en informatique et j aime le cinéma',
  filmsVu: 18,
  imageUrl: 'https://a.ltrbxd.com/resized/avatar/upload/8/1/9/2/9/9/6/shard/avtr-0-1000-0-1000-crop.jpg?v=529ff465b7',
  filmpref1: 1,
  filmpref2: 1,
  filmpref3: 1,
  filmpref4: 1
},
{
  id: 5,
  pseudo: 'matt lynch',
  pass: 'Admin123',
  bio: 'I love movies about romance',
  filmsVu: 105,
  imageUrl: 'https://secure.gravatar.com/avatar/fb4cae3779fcedc4f707ee7359b12a3e?rating=PG&size=1000&border=&default=https%3A%2F%2Fs.ltrbxd.com%2Fstatic%2Fimg%2Favatar1000.a71b6e9c.png',
  filmpref1: 1,
  filmpref2: 1,
  filmpref3: 1,
  filmpref4: 1
}
];

constructor(private http:HttpClient) {}

addProfileToDB(formValue: { pseudo: string, pass: string}): Observable<Profile> {
  return this.getAllProfilesFromDB().pipe(
       map(profiles => [...profiles].sort((a,b) => a.id - b.id)),
       map(sortedProfiles => sortedProfiles[sortedProfiles.length - 1]),
       map(previousProfile => ({
          ...formValue,
          bio: '',
          filmsVu: 0,
          imageUrl: '',
          filmspref1: '',
          filmspref2: '',
          filmspref3: '',
          filmspref4: '',
          id: previousProfile.id + 1
      })),
      switchMap(newFilm => this.http.post<Profile>(
          'http://localhost:3000/films',
          newFilm)
      )
  );
}

changeBioToDB(profile: Profile): Observable<Profile> {
  return this.getProfilesByIdFromDB(profile.id).pipe(
    map(({ bio }) => bio),
    map(val => val + profile.bio),
      switchMap(newFilm => this.http.post<Profile>(
          'http://localhost:3000/profiles',
          newFilm)
      ));
}

getAllProfilesFromDB(): Observable<Profile[]> {
  return this.http.get<Profile[]>('http://localhost:3000/profiles');
}

getProfilesByIdFromDB(profileId: number): Observable<Profile> {
  return this.http.get<Profile>(`http://localhost:3000/profiles/${profileId}`);
}

getProfilesByPseudoFromDB(pseudo: string | null): Observable<Profile> {
  return this.http.get<Profile>(`http://localhost:3000/profiles/${pseudo}`);
}

    getAllProfile():Profile[]{
    return this.profile;
    }

    getProfileById(profileId: number):Profile{
      const profile = this.profile.find(profile => profile.id === profileId);
      if (!profile) {
          throw new Error('Profil introuvable');
      } else {
          return profile;
      }
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
