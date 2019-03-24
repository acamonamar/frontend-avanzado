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
  @Output() userEdit: User;
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
          'nacimiento': [''],
          'email': ['', [Validators.email]],
          'sobre_mi': [''],
          'otras_competencias': [],
          'permisos': [''],
          'documento': this.formBuilder.group({
              'tipo': [''],
              'numero': [''],
          }, {validator: dniValidator}),
          'direccion': this.formBuilder.group({
              'calle': ['' ],
              'provincia': [''],
              'municipio': ['']
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
          nacimiento: user.nacimiento,
          email: user.email,
          permisos: user.permisos,
          sobre_mi: user.sobre_mi,
          otras_competencias: user.otras_competencias,
      });
      this.documento.patchValue({
          tipo: user.documento_identidad,
          numero: user.numero_documento,
      });
      this.direccion.patchValue({
          calle: user.address[0].calle,
          provincia: user.address[0].provincia,
          municipio: user.address[0].municipio,
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

  save(): void {
      console.log('USUARIO ACTUAL');
      console.log(this.user);

      this.userEdit = this.user;

      if (this.formDatos.value.name !== undefined) {
        this.userEdit.name = this.formDatos.value.name;
      }
      if (this.formDatos.value.surname !== undefined) {
          this.userEdit.surname = this.formDatos.value.surname;
      }
      if (this.formDatos.value.phone !== undefined) {
          this.userEdit.phone = this.formDatos.value.phone;
      }
      if (this.formDatos.value.email !== undefined) {
          this.userEdit.email = this.formDatos.value.email;
      }
      if (this.formDatos.value.permisos !== undefined) {
          this.userEdit.permisos = this.formDatos.value.permisos;
      }
      if (this.formDatos.value.sobre_mi !== undefined) {
          this.userEdit.sobre_mi = this.formDatos.value.sobre_mi;
      }
      if (this.formDatos.value.otras_competencias !== undefined) {
          this.userEdit.otras_competencias = this.formDatos.value.otras_competencias;
      }
      if (this.documento.value.tipo !== undefined) {
          this.userEdit.documento_identidad = this.documento.value.tipo;
      }
      if (this.documento.value.numero !== undefined) {
          this.userEdit.numero_documento = this.documento.value.numero;
      }
      if (this.direccion.value.calle !== undefined) {
          this.userEdit.address[0].calle = this.direccion.value.calle;
      }
      if (this.direccion.value.provincia !== undefined) {
          this.userEdit.address[0].provincia = this.direccion.value.provincia;
      }
      if (this.direccion.value.municipio !== undefined) {
          this.userEdit.address[0].municipio = this.direccion.value.municipio;
      }

      console.log('USUARIO MODIFICADO');
      console.log(this.userEdit);
      this._userservice.updateUser(this.userEdit)
          .subscribe(() => this.goBack());
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
