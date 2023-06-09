import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films-service';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {

  filmForm!: FormGroup;
  filmPreview$!: Observable<Film>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private filmService:FilmsService,
    private router:Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.filmForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        real: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        date: [null, [Validators.required]],
        location: [null],
    },{
      updateOn: 'blur'
    });
    this.filmPreview$ = this.filmForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          createdDate: new Date(formValue.date),
          price: 0,
          buttonText: "Like!",
          stars: 0,
          id: 0
      }))
  );
}
onSubmitForm() {
  this.filmService.addFilmToDB(this.filmForm.value).pipe(
      tap(() => this.router.navigateByUrl('/films'))
  ).subscribe();
}
}
