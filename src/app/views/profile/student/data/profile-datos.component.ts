import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

import {dniValidator} from '../../../../shared/validators/documento.validator';
import {ListDocumentosIdentidad} from '../../../../shared/models/list-documentos-identidad';
import {MockService} from '../../../../shared/services/mock.service';
import {ListProvincias} from '../../../../shared/models/list-provincias';

@Component({
  selector: 'app-profile-datos',
  templateUrl: './profile-datos.component.html',
  styleUrls: ['./profile-datos.component.scss'],
  providers: [UserService]
})
export class ProfileDatosComponent implements OnInit {

  @Input() user: User;
  @Output() documentos: ListDocumentosIdentidad[];
  @Output() provincias: ListProvincias[];
  userEdit: User;
  public formDatos: FormGroup;


  constructor(
      private _userservice: UserService,
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private location: Location,
      private _mockservice: MockService
  ) { }

  ngOnInit() {
      this.getUserById();
      this.getProvincias();
      this.getDocumentos();
      this.formDatos = this.formBuilder.group({
          'name': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
          'surname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
          'email': ['', [Validators.email]],
          'documento': this.formBuilder.group({
              'tipo': [''],
              'numero': [''],
          }, {validator: dniValidator}),
          'direccion': this.formBuilder.group({
              'street': ['' ],
              'zone': [''],
              'city': ['']
          })
      });
  }


  getUserById() {
      const id = +this._route.snapshot.paramMap.get('id');
      this._userservice.getUser(id)
          .subscribe(user => {this.user = user; this.updateForm(user); });
  }

  updateForm(user: User) {
      this.formDatos.patchValue({
          name: user.name,
          surname: user.surname,
          email: user.email,
      });
      this.documento.patchValue({
          tipo: user.documento_identidad,
          numero: user.numero_documento,
      });
      this.direccion.patchValue({
          street: user.address[0].street,
          zone: user.address[0].provincia,
          city: user.address[0].municipio,
      });
  }

  getProvincias() {
      this._mockservice.getProvincias()
          .subscribe(provincias => this.provincias = provincias);
  }
  getDocumentos() {
      this._mockservice.getDocumentos()
            .subscribe(documentos => this.documentos = documentos);
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

  get direccion(){ return this.formDatos.get('direccion');}
  get documento() { return this.formDatos.get('documento'); }
  get name() { return this.formDatos.get('name'); }
  get surname() { return this.formDatos.get('surname'); }
  get email() { return this.formDatos.get('email'); }

  goBack(): void {
      this.location.back();
  }

}
