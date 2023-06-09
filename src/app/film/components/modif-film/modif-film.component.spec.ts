import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFilmComponent } from './modif-film.component';

describe('ModifFilmComponent', () => {
  let component: ModifFilmComponent;
  let fixture: ComponentFixture<ModifFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
