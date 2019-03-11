import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIdiomasComponent } from './profile-idiomas.component';

describe('ProfileIdiomasComponent', () => {
  let component: ProfileIdiomasComponent;
  let fixture: ComponentFixture<ProfileIdiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIdiomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
