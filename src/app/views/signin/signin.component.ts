import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from "../../shared/services/user.service";

import {User} from '../../shared/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {
  user: User;
  public title: string;
  public formLogin: FormGroup;
  // public identidad;
  public login;


  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService,
  ) {
    // this.identidad = this._userservice.getUsers();
  }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }
  submit() {
    this._userservice.getUsers().subscribe(
        res => {
          console.log('Repuesta del subscribe: '+ res);

          this.login = res;
          let encontrado = 0;
          let i: number;
          for ( i = 0; i < this.login.length; i++) {
            if ((this.login[i].email === this.formLogin.value.email )
                && (this.login[i].password === this.formLogin.value.password )) {
              localStorage.setItem('identity', JSON.stringify(this.login[i]));
              this._router.navigateByUrl ('/admin/dashboard');
              this.user = this.login[i];
              console.log('Este usuario... ' + this.user.name);
              /*let u: User = {user: username, passwd: password};
              this._userService.setUserLoggedIn(u);*/
              encontrado = 1;
              console.log('son iguales');
            }
          }
          if (encontrado === 0) {
            alert('Usuario incorrecto');
          }
        });
    console.log(this.formLogin.value);
  }
}
