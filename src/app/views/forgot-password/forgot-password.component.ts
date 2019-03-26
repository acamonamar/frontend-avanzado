import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [UserService]
})
export class ForgotPasswordComponent implements OnInit {

  public title: string;
  public formLogin: FormGroup;
  public identidad;
  public login;

  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService
  ) {
    this.identidad = this._userservice.getUsers();
  }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]]
    });

  }

  submit(){
    this._userservice.getUsers().subscribe(
        res => {
          console.log(res);

          this.login = res;
          console.log(this.login[0].user);
          console.log(this.login.length);

          let i: number;
          for ( i = 0; i < this.login.length; i++) {
            if (this.login[i].email === this.formLogin.value.email ){
              console.log(this.login[i].name);
              console.log(this.login[i].password);
              alert('mensaje enviado a ' + this.login[i].email + '.');
              this._router.navigateByUrl ('/signin');
            }
          }
        });
    console.log(this.formLogin.value);
  }

}
