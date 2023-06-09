import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concatMap, filter, map, tap } from 'rxjs';
import { Film } from 'src/app/models/Film';
import { AuthService } from 'src/app/services/auth-service';
import { FilmsService } from 'src/app/services/films-service';

@Component({
  selector: 'app-modif-film',
  templateUrl: './modif-film.component.html',
  styleUrls: ['./modif-film.component.scss']
})
export class ModifFilmComponent implements OnInit {

  film!: Film;
  filmForm!: FormGroup;
  filmPreview$!: Observable<Film>;
  urlRegex!: RegExp;
  showing!: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private filmService: FilmsService, private auth: AuthService) {
  }
  ngOnInit(): void {
    this.showing = false;
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.filmForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      real: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      date: [null, [Validators.required]],
      location: [null]
    }, {
      updateOn: 'blur'
    });
    this.filmPreview$ = this.filmForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(formValue.date)
      }))
    );
  }

  search(term: string): void {
    if (term) {
      this.showing = false;
      this.filmService.getAllFilmsFromDB().pipe(
        concatMap(films => films),
        filter(film => film.title === term)
      ).subscribe(reponse => {
        if (reponse != null) {
          this.film = reponse;
          this.showing = true;
        }
      });
    }
  }


  onSubmitForm() {
    this.filmForm.value.price = this.film.price;
    this.filmForm.value.id = this.film.id;
    this.filmForm.value.stars = this.film.stars;
    this.filmForm.value.buttonText = this.film.buttonText;
    this.filmForm.value.createdDate = new Date(this.filmForm.value.date);
    this.filmService.changeFilmToDB(this.filmForm.value);
    this.router.navigateByUrl('/films');
  }

  get afficher(): boolean {
    return this.showing;
  }

}
