import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormacionComponent } from './profile-formacion.component';

describe('ProfileFormacionComponent', () => {
  let component: ProfileFormacionComponent;
  let fixture: ComponentFixture<ProfileFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
