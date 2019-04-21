import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import {
  Study,
  VocationalStudy,
  CollegeStudy
} from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import {AppState} from '../../../../shared/store/app.state';
import {Store} from '@ngrx/store';
import * as fromUserActions from '../../../../shared/store/user/user.actions';
import {User} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})
export class ProfileStudyComponent {
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Study = {} as (VocationalStudy | CollegeStudy);
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private store: Store<AppState>
  ) {
    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
    this.route.params.subscribe(params => {
      const user = this.profileService.user;
      const uid = +params.uid;
      // this.store.dispatch(new  fromUserActions.CargarStudie(uid));
      this.study = (user.studies.find(study => study.uid === uid) || {}) as
        | VocationalStudy
        | CollegeStudy;
    });

    this.studiesForm = new FormGroup({
      option: new FormControl(this.study.level, [Validators.required])
    });
  }

  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(study: VocationalStudy | CollegeStudy) {
    const studies = this.user.studies;
    const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
    studies[foundIndex] = study;
    this.store.dispatch(new fromUserActions.SaveUser(this.user));
    this.router.navigate(['/admin/profile']);
  }
  private save(study: VocationalStudy | CollegeStudy) {
    const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
      this.user.studies,
      study
    );
    this.user.studies = [...this.user.studies, _study];
    this.store.dispatch(new fromUserActions.SaveUser(this.user));
    this.router.navigate(['/admin/profile']);
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
    study.level = this.studiesForm.get('option').value;
    this.isNew() ? this.save(study) : this.update(study);
  }
  public isNew(): boolean {
    return !!!this.study.uid;
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
