import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../../shared/services/signin.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [SigninService]
})
export class SigninComponent implements OnInit {
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
    this.identidad = this._signinservice.getUser();
  }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });

  }

  /*submit( ) {
    this.submitted = true;
    if (this.formLogin.invalid){
      return;
    }
    console.log(this.identidad);
    alert('TOMA YA! ');
  }*/
  submit(){
    this._signinservice.getUser().subscribe(
        res => {
          console.log(res);

          this.login = res;
          console.log(this.login[0].user);
          console.log(this.login.length);

          let i: number;
          for ( i = 0; i < this.login.length; i++) {
            if ((this.login[i].user === this.formLogin.value.email )
                && (this.login[i].password === this.formLogin.value.password )) {
              console.log(this.login[i].user);
              console.log(this.login[i].password);
              this._router.navigateByUrl ('/admin/dashboard');
              /*let u: User = {user: username, passwd: password};
              this._userService.setUserLoggedIn(u);*/
              console.log('son iguales');
            }
          }
        });
    console.log(this.formLogin.value);
  }
/*
  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this._signinservice.getUser( username , password).subscribe(

        res => {
          console.log('RESULTADO');
          console.log(res);
          // @ts-ignore
          this.login = res;
          if (this.login.status == 'OK'){
            this._router.navigateByUrl('/listado');
            let u: User = {user: username, passwd: password};
            this._userService.setUserLoggedIn(u);

          } else{
            this._router.navigateByUrl('/login');
          }

        },
        error => {
          console.error(error);

        }
    );
  }*/

}
