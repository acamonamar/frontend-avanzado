import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatosComponent } from './profile-datos.component';

describe('ProfileDatosComponent', () => {
  let component: ProfileDatosComponent;
  let fixture: ComponentFixture<ProfileDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
