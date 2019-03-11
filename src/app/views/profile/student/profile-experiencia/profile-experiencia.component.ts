import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-experiencia',
  templateUrl: './profile-experiencia.component.html',
  styleUrls: ['./profile-experiencia.component.scss'],
  providers: [ProfileService]
})
export class ProfileExperienciaComponent implements OnInit {

  public identity;
  public keys_experiences: String[];

  constructor(private _profileservice: ProfileService
  ) {}
  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    this.keys_experiences = Object.keys(this.identity.experiences.entities);
  }
}
