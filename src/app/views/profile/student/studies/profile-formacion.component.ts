import {Component, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';
import { MockService } from '../../../../shared/services/mock.service';
import {ListTitulosAcademicos} from '../../../../shared/models/list-titulos-academicos';
import {ListCentrosEducativos} from '../../../../shared/models/list-centros-educativos';
import {ListTipoTitulo} from '../../../../shared/models/list-tipo-titulo';
import {ListNivelGrado} from '../../../../shared/models/list-nivel-grado';
import {ListFamiliasFormacion} from '../../../../shared/models/list-familias-formacion';
import {Studie} from '../../../../shared/models/studie';

@Component({
  selector: 'app-profile-formacion',
  templateUrl: './profile-formacion.component.html',
  styleUrls: ['./profile-formacion.component.scss'],
  providers: [UserService]
})
export class ProfileFormacionComponent implements OnInit {

    @Input() user: User;
    @Output() users: User[];
    @Output() userEdit: User;
    @Output() titulos: ListTitulosAcademicos[];
    @Output() centros: ListCentrosEducativos[];
    @Output() tipos: ListTipoTitulo[];
    @Output() grados: ListNivelGrado[];
    @Output() familias: ListFamiliasFormacion[];

    public sid;
    public nuevo_sid;
    public formFormacion: FormGroup;




  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService,
      private _location: Location,
      private _mockservice: MockService
  ) {}

  ngOnInit() {
      this.sid = +this._route.snapshot.paramMap.get('sid');
      // Obtener tipos de titulos
      this.getTitulosAcademicos();
      // Obtener centros educativos
      this.getCentrosEducativos();
      // Obtener tipos titulos
      this.getTipoTitulos();
      // Obtener tipos grados
      this.getNivelGrado();
      // Obtener Familias
      this.getFamiliasFormacion();
      // Obtenemos el usuario
      this.getUserById();
      this.onChanges();
      // Validación Formulario
      this.formFormacion = this.formBuilder.group({
          'id': [''],
          'sid': [''],
          'tipo_titulo': [''],
          'titulo_academico_ciclo': [''],
          'titulo_academico_universidad': [''],
          'centro': [''],
          'familia': [''],
          'grado': [''],
      });

      console.log(this.user);
  }

    onChanges() {
    }

    getTitulosAcademicos() {
        this._mockservice.getTitulosAcademicos()
            .subscribe(titulos => this.titulos = titulos);
    }

    getTipoTitulos() {
        this._mockservice.getTipoTitulos()
            .subscribe(tipos => this.tipos = tipos);
    }
    getNivelGrado() {
        this._mockservice.getNivelGrado()
            .subscribe(grados => this.grados = grados);
    }

    getFamiliasFormacion() {
        this._mockservice.getFamiliasFormacion()
            .subscribe(familias => this.familias = familias);
    }

    getCentrosEducativos() {
        this._mockservice.getCentrosEducativos()
            .subscribe(centros => this.centros = centros);
    }


    getUserById() {
        const id = +this._route.snapshot.paramMap.get('id');
        this._userservice.getUser(id)
            .subscribe(user => {this.user = user; this.updateForm(user); });
    }
    updateForm(user: User) {

        if (user.studies[this.sid].tipo_titulo === 'Universidad') {
            this.formFormacion.patchValue({
                id: user.id,
                sid: this.sid,
                tipo_titulo: user.studies[this.sid].tipo_titulo,
                titulo_academico_universidad: user.studies[this.sid].formacion_universidad[0].titulo,
                centro: user.studies[this.sid].formacion_universidad[0].centro,
                familia: user.studies[this.sid].formacion_universidad[0].familia,
            });
        }
        if (user.studies[this.sid].tipo_titulo === 'Ciclo') {
            this.formFormacion.patchValue({
                id: user.id,
                sid: this.sid,
                tipo_titulo: user.studies[this.sid].tipo_titulo,
                titulo_academico_ciclo: user.studies[this.sid].formacion_ciclo[0].titulo,
                centro: user.studies[this.sid].formacion_ciclo[0].centro,
                familia: user.studies[this.sid].formacion_ciclo[0].familia,
                grado: user.studies[this.sid].formacion_ciclo[0].grado,
            });
        }
        this.nuevo_sid = this.user.studies.length;

    }

    removeStudie(index: number) {
        this.user.studies = this.user.studies.filter((_, i) => i !== index);
    }

    save(): void {
        // console.log('USUARIO ACTUAL');
        // console.log(this.user);
        // console.log('FORMULARIO ACTUAL');
        // console.log(this.formFormacion.value);
        this.userEdit = this.user;

        if (this.userEdit.studies.length === this.sid) {
            if (!this.userEdit.studies) {
                this.userEdit.studies = [];
            }

            this.user.studies.push({
                id: this.userEdit.id,
                sid: this.sid,
                tipo_titulo: this.formFormacion.value.tipo_titulo,
                formacion_ciclo: [{
                    centro: this.formFormacion.value.centro,
                    familia: this.formFormacion.value.familia,
                    grado: this.formFormacion.value.grado,
                    titulo: this.formFormacion.value.titulo_academico_ciclo,
                    fecha: this.formFormacion.value.fecha,
                    formacion_dual: this.formFormacion.value.formacion_dual,
                    formacion_bilingue: this.formFormacion.value.formacion_bilingue,
                    certificado: null
                }],
                formacion_universidad: [{
                    centro: this.formFormacion.value.centro,
                    titulo: this.formFormacion.value.titulo_academico_ciclo,
                    fecha: this.formFormacion.value.fecha,
                    familia: this.formFormacion.value.familia,
                    formacion: this.formFormacion.value.formacion,
                    certificado: false
                }]
            });
        } else{
            if (this.formFormacion.value.tipo_titulo !== undefined) {
                this.userEdit.studies[this.sid].tipo_titulo = this.formFormacion.value.tipo_titulo;
            }
            if (this.formFormacion.value.tipo_titulo === 'Universidad'){
                if (this.formFormacion.value.titulo_academico_universidad !== undefined) {
                    this.userEdit.studies[this.sid].formacion_universidad[0].titulo = this.formFormacion.value.titulo_academico_universidad;
                }
                if (this.formFormacion.value.centro !== undefined) {
                    this.userEdit.studies[this.sid].formacion_universidad[0].centro = this.formFormacion.value.centro;
                }
                if (this.formFormacion.value.familia !== undefined) {
                    this.userEdit.studies[this.sid].formacion_universidad[0].familia = this.formFormacion.value.familia;
                }
            }
            if (this.formFormacion.value.tipo_titulo === 'Ciclo') {
                if (this.formFormacion.value.titulo_academico_ciclo !== undefined) {
                    this.userEdit.studies[this.sid].formacion_ciclo[0].titulo = this.formFormacion.value.titulo_academico_ciclo;
                }
                if (this.formFormacion.value.centro !== undefined) {
                    this.userEdit.studies[this.sid].formacion_ciclo[0].centro = this.formFormacion.value.centro;
                }
                if (this.formFormacion.value.familia !== undefined) {
                    this.userEdit.studies[this.sid].formacion_ciclo[0].familia = this.formFormacion.value.familia;
                }
            }
        }
        //console.log('USUARIO MODIFICADO');
        //console.log(this.userEdit);
        this._userservice.updateUser(this.userEdit)
            .subscribe();
    }

    get tipo_titulo() { return this.formFormacion.get('tipo_titulo'); }


    goBack(): void {
        this._location.back();
    }

}
