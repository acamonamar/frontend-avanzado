import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SigninService} from '../../shared/services/signin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [SigninService]
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
      private _signinservice: SigninService
  ) {
    this.identidad = this._signinservice.getUsers();
  }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]]
    });

  }

  submit(){
    this._signinservice.getUsers().subscribe(
        res => {
          console.log(res);

          this.login = res;
          console.log(this.login[0].user);
          console.log(this.login.length);

          let i: number;
          for ( i = 0; i < this.login.length; i++) {
            if (this.login[i].user === this.formLogin.value.email ){
              console.log(this.login[i].user);
              console.log(this.login[i].password);
              alert('mensaje enviado a' + this.login[i].user + '.');
              this._router.navigateByUrl ('/signin');
            }
          }
        });
    console.log(this.formLogin.value);
  }

}
