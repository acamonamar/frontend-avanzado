import {Component, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';
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

    @Input() studie: Studie;

    public sid;
    public formFormacion: FormGroup;
    public titulo_onchange: string;
    public titulo_inicial


  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService,
      private _location: Location
  ) {}

  ngOnInit() {
      this.sid = +this._route.snapshot.paramMap.get('sid');
      // Validación Formulario
      this.formFormacion = this.formBuilder.group({
          'titulo_academico': [''],
          'centro': [''],
          'familia': [''],
          'grado': [''],
      });
      this.onChanges();
      // Obtenemos el usuario
      this.getUserById();
      this.titulo_inicial = this.formFormacion.get('titulo_academico').value;
      console.log('Este es el titulo inicial' + this.titulo_inicial);
  }

    onChanges(): void {
        this.formFormacion.get('titulo_academico').valueChanges.subscribe(val => {
            this.titulo_onchange = `${val}`;
        });
    }



    editarFormacion() {
      const id = +this._route.snapshot.paramMap.get('id');
      this.sid = +this._route.snapshot.paramMap.get('sid');
      console.log(this.formFormacion);
    }

    getUserById() {
      const id = +this._route.snapshot.paramMap.get('id');
      this._userservice.getUser(id)
            .subscribe(user => this.user = user);
    }


    save(): void {
        console.log(this.user);
        this._userservice.updateUser(this.user)
            .subscribe(() => this.goBack());
    }


    goBack(): void {
        this._location.back();
    }

}
