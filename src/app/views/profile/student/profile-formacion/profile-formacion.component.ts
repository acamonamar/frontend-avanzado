import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProfileService} from '../../../../shared/services/profile.service';

@Component({
  selector: 'app-profile-formacion',
  templateUrl: './profile-formacion.component.html',
  styleUrls: ['./profile-formacion.component.scss'],
  providers: [ProfileService]
})
export class ProfileFormacionComponent implements OnInit {
  // users: any[] = [];
  public identity;
  public keys_studies: String[];

  public formFormacion: FormGroup;

  public verSeleccion;

  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _profileservice: ProfileService
  ) {}
  ngOnInit() {
    // this.getProfile();
    this.identity = this._profileservice.getIdentity();
    this.keys_studies = Object.keys(this.identity.studies.entities);
    this.formFormacion = this.formBuilder.group({
      'titulo_academico': ['', [Validators.required]],
    });
  }

  get titulo() { return this.formFormacion.get('titulo_academico')
      .valueChanges
      .subscribe(value => {
        console.log(value);
        if (value === 'universidad') {
          console.log('validacion universidad');
          // const validators = [Validators.required, Validators.maxLength(7)];
          // this.formFormacion.get('numero_contacto').setValidators(validators);
        } else {
          console.log('no.');
          // const validators = [Validators.required, Validators.maxLength(10)];
          // this.formFormacion.get('numero_contacto').setValidators(validators);
        }
      });
  }
}
