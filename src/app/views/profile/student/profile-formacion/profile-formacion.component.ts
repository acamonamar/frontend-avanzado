import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProfileService} from '../../../../shared/services/profile.service';
import {identity} from 'rxjs';

@Component({
  selector: 'app-profile-formacion',
  templateUrl: './profile-formacion.component.html',
  styleUrls: ['./profile-formacion.component.scss'],
  providers: [ProfileService]
})
export class ProfileFormacionComponent implements OnInit {

  public identity;
  public keys_studies: String[];
  public formFormacion: FormGroup;

  public title;
  public myKey;
  public academic;


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
      'centro_educativo': ['', [Validators.required]],
      'familia': ['', [Validators.required]],
      'grado': ['', [Validators.required]],
    });
    console.log(this.formFormacion.value);
    console.log('Formacion' + this.identity.studies.entities[0].title);
     const id = this._route.params.subscribe(params => {
       this.myKey = params['id'];
  console.log('Este es el ID' + this.myKey);
      this.title = id ? 'Edit User' : 'New User';

      if (!id) { return; }

      this._profileservice.getIdentity()
          .subscribe(
              response => {
                if (response.status === 404) {
                  this._router.navigate(['NotFound']);
                }
              });
    });
  }

  get titulo() { return this.formFormacion.get('titulo_academico').valueChanges
      .subscribe(value => {
        console.log(value);
        if (value === 'universidad') {
          console.log('validacion universidad');
          this.academic = 'universidad';
          // const validators = [Validators.required, Validators.maxLength(7)];
          // this.formFormacion.get('numero_contacto').setValidators(validators);
        }
        if (value === 'ciclo')
        {
          this.academic = 'ciclo';
          // const validators = [Validators.required, Validators.maxLength(10)];
          // this.formFormacion.get('numero_contacto').setValidators(validators);
        }
      });
  }
}
