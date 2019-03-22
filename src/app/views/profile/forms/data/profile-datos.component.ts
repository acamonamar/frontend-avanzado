import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

import {dniValidator} from '../../../../shared/validators/documento.validator';

@Component({
  selector: 'app-profile-datos',
  templateUrl: './profile-datos.component.html',
  styleUrls: ['./profile-datos.component.scss'],
  providers: [UserService]
})
export class ProfileDatosComponent implements OnInit {

  @Input() user: User;
  userEdit: User;
  public formDatos: FormGroup;


  constructor(
      private _userservice: UserService,
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private location: Location
  ) { }

  ngOnInit() {
      console.log();
      this.getUserById();
      this.formDatos = this.formBuilder.group({
          'name': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
          'surname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
          'email': ['', [Validators.email]],
          'documento': this.formBuilder.group({
              'tipo': [''],
              'numero': [''],
          }, {validator: dniValidator}),
          'address': this.formBuilder.group({
              'street': ['' ],
              'zone': [''],
              'city': ['']
          })
      });
  }


  getUserById() {
      const id = +this._route.snapshot.paramMap.get('id');
      this._userservice.getUser(id)
          .subscribe(user => this.user = user);
  }

  onChanges(): void {
        console.log('CAMBIANDO' + this.user);
  }

  save(): void {
      console.log(this.user);
      this.userEdit = this.user;
      this.userEdit.name = this.formDatos.get('name').value;
      this.userEdit.surname = this.formDatos.get('surname').value;
      this.userEdit.phone = this.formDatos.get('phone').value;
      this.userEdit.documento_identidad = this.formDatos.get('tipo').value;
      this.userEdit.numero_documento = this.formDatos.get('numero').value;
      console.log(this.userEdit);
      this._userservice.updateUser(this.userEdit);
          // .subscribe(() => this.goBack());
  }

  get documento() { return this.formDatos.get('documento'); }
  get name() { return this.formDatos.get('name'); }
  get surname() { return this.formDatos.get('surname'); }
  get email() { return this.formDatos.get('email'); }

  goBack(): void {
      this.location.back();
  }

}
