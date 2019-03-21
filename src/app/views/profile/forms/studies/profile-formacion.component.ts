import {Component, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from "../../../../shared/models/user";
import { UserService } from "../../../../shared/services/user.service";
import {Studie} from "../../../../shared/models/studie";

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


    public formFormacion: FormGroup;



  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService
  ) {}
  ngOnInit() {
    // Obtengo perfil;
      // console.log(this.user);
    // Validación Formulario
    this.formFormacion = this.formBuilder.group({
      'titulo_academico': ['', [Validators.required]],
      'centro_educativo': ['', [Validators.required]],
      'familia': ['', [Validators.required]],
      'grado': ['', [Validators.required]],
    });
    // Pruebas
    console.log(this.formFormacion.value);

    this.getUser();
  }
    getUser(): void {
        const id = +this._route.snapshot.paramMap.get('id');
        const sid = +this._route.snapshot.paramMap.get('sid');
        console.log(id);
        // this._userservice.getUser(id).subscribe(user => this.user = user);
        this._userservice.getUsers().subscribe(
            res => {
                console.log('Repuesta del subscribe: '+ res);

                let encontrado = 0;
                let i: number;
                for ( i = 0; i < res.length; i++) {
                    if (res[i].id === id ) {
                        localStorage.setItem('identity', JSON.stringify(res[i]));
                        this.user = res[i];
                        console.log('Este usuario... ' + this.user.name);
                        /*let u: User = {user: username, passwd: password};
                        this._userService.setUserLoggedIn(u);*/
                        encontrado = 1;
                        console.log(this.user);

                        let j: number;
                        for ( j = 0; j < this.user.studies.length; j++) {
                            if (this.user.studies[j].sid === sid){
                                this.studie = this.user.studies[j];
                                console.log(this.studie);
                            }
                        }
                    }
                }
                if (encontrado === 0) {
                    alert('Usuario incorrecto');
                }
            });
    }

}
