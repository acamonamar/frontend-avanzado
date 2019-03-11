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
  public keys_offers: String[];
  constructor(private _profileservice: ProfileService
  ) {}
  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    if (this.identity.userRol === 'student') {
      this.keys_studies = Object.keys(this.identity.studies.entities);
      this.keys_experiences = Object.keys(this.identity.experiences.entities);
      this.keys_languages = Object.keys(this.identity.languages.entities);
    } else {
      this.keys_offers = Object.keys(this.identity.offers.entities);
    }
  }


  removeOffer(id) {
    console.log('Eliminado oferta con id:' + id);
    let i: number;
    for ( i = 0; i < this.identity.offers.entities.length; i++) {
      console.log(this.identity.offers.entities[i].position);
      if (this.identity.offers.entities[i].oid === id ) {
        this.identity.offers.entities.splice(i,1);
        this.keys_offers = Object.keys(this.identity.offers.entities);
      }
    }
  }

  removeStudie(id) {
    console.log('Eliminado estudio con id:' + id);
    let i: number;
    for ( i = 0; i < this.identity.studies.entities.length; i++) {
      console.log(this.identity.studies.entities[i].position);
      if (this.identity.studies.entities[i].sid === id ) {
        this.identity.studies.entities.splice(i,1);
        this.keys_studies = Object.keys(this.identity.studies.entities);
      }
    }
  }

  removeExperience(id) {
    console.log('Eliminado experiencia con id:' + id);
    let i: number;
    for ( i = 0; i < this.identity.experiences.entities.length; i++) {
      console.log(this.identity.experiences.entities[i].position);
      if (this.identity.experiences.entities[i].eid === id ) {
        this.identity.experiences.entities.splice(i,1);
        this.keys_experiences = Object.keys(this.identity.experiences.entities);
      }
    }
  }

  removeLanguage(id) {
    console.log('Eliminado estudio con id:' + id);
    let i: number;
    for ( i = 0; i < this.identity.languages.entities.length; i++) {
      console.log(this.identity.languages.entities[i].position);
      if (this.identity.languages.entities[i].lid === id ) {
        this.identity.languages.entities.splice(i,1);
        this.keys_languages = Object.keys(this.identity.languages.entities);
      }
    }
  }
}
