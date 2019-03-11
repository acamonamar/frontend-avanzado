import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../../../../shared/services/profile.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-datos',
  templateUrl: './profile-datos.component.html',
  styleUrls: ['./profile-datos.component.scss'],
  providers: [ProfileService]
})
export class ProfileDatosComponent implements OnInit {
  public identity;
  public title: string;
  public formDatos: FormGroup;
  public identidad;
  public login;

  constructor(
      private _profileservice: ProfileService,
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router
  ) { }

  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    this.formDatos = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      'surname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      'email': ['', [Validators.required, Validators.email]],
    });
  }

  get name() { return this.formDatos.get('name'); }
  get surname() { return this.formDatos.get('surname'); }


}
