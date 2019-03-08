import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../../shared/services/signin.service';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [SigninService, ProfileService]
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
      private _signinservice: SigninService,
      private _profileservice: ProfileService
  ) {
    this.identidad = this._signinservice.getUser();
  }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
    console.log(this._profileservice.getIdentity());
  }
  submit() {
    this._signinservice.getUser().subscribe(
        res => {
          console.log(res);

          this.login = res;
          // console.log(this.login[0].email);
          // console.log(this.login.length);
          let encontrado = 0;
          let i: number;
          for ( i = 0; i < this.login.length; i++) {
            if ((this.login[i].email === this.formLogin.value.email )
                && (this.login[i].password === this.formLogin.value.password )) {
              console.log(this.login[i].email);
              console.log(this.login[i].password);
              console.log('OBJETO' + this.login[i]);
              localStorage.setItem('identity', JSON.stringify(this.login[i]));
                this._router.navigateByUrl ('/admin/dashboard');
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
