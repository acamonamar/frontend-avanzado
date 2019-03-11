import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperienciaComponent } from './profile-experiencia.component';

describe('ProfileExperienciaComponent', () => {
  let component: ProfileExperienciaComponent;
  let fixture: ComponentFixture<ProfileExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
