import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-idiomas',
  templateUrl: './profile-idiomas.component.html',
  styleUrls: ['./profile-idiomas.component.scss'],
  providers: [ProfileService]
})
export class ProfileIdiomasComponent implements OnInit {
  public identity;
  public keys_languages: String[];

  constructor(private _profileservice: ProfileService
  ) {}
  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    this.keys_languages = Object.keys(this.identity.languages.entities);
  }

}
