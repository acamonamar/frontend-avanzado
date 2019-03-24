import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User }           from '../../shared/models/user';
import { UserService }    from '../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  public numero_studies;

  constructor(
      private _userservice: UserService,
      private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._userservice.getUser(id)
        .subscribe(user => {this.user = user; this.updateUser(user); });
  }
  updateUser(user: User) {
    this.numero_studies = this.user.studies.length;
  }

  removeStudie(index: number) {
    this.user.studies = this.user.studies.filter((_, i) => i !== index);
  }
  removeExperience(index: number) {
    this.user.experiences = this.user.experiences.filter((_, i) => i !== index);
  }
  removeSLanguage(index: number) {
    this.user.languages = this.user.languages.filter((_, i) => i !== index);
  }

  // used to avoid refresh dom editing powers
  trackByFn(index, user) {
    return index;
  }

}
