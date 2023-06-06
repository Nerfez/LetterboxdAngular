import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfileComponent } from './liste-profile.component';

describe('ListeProfileComponent', () => {
  let component: ListeProfileComponent;
  let fixture: ComponentFixture<ListeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
