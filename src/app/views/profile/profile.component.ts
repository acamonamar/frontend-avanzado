import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  // users: any[] = [];
  public identity;
  public keys_studies: String[];
  public keys_experiences: String[];
  public keys_languages: String[];

  constructor(private _profileservice: ProfileService
  ) {}
  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    this.keys_studies = Object.keys(this.identity.studies.entities);
    this.keys_experiences = Object.keys(this.identity.experiences.entities);
    this.keys_languages = Object.keys(this.identity.languages.entities);

  }

  /*
  getProfile() {
    this.profileservice.loadProfile().subscribe(data =>{
      this.users = data;
    });
  }*/

}
