import {Component, OnInit} from '@angular/core';
import { User } from '../../../shared/models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../shared/store/app.state';
import * as fromUserActions from '../../../shared/store/user/user.actions';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit{
  user: User;

  constructor(
      private store: Store<AppState>
  ) { }
  ngOnInit() {
    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
  }
  deleteStudy(studyID: number) {
    const studies = this.user.studies;
    const index = studies.findIndex(study => study.uid === studyID);
    if (index === -1) {
      alert('Error: Study not found');
      return;
    }
    studies.splice(index, 1);
    this.store.dispatch(new fromUserActions.SaveUser(this.user));

    // this.profileService.updateProfile(this.user);
  }
  deleteLanguage(languageID: any) {
    const languages = this.user.languages;
    const index = languages.findIndex(language => language.uid === languageID);
    if (index === -1) {
      alert('Error: Language not found');
      return;
    }
    languages.splice(index, 1);
    this.store.dispatch(new fromUserActions.SaveUser(this.user));
    // this.profileService.updateProfile(this.user);
  }
}
