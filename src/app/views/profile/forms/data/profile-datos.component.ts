import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { Location } from '@angular/common';

import { UserService } from "../../../../shared/services/user.service";
import { ActivatedRoute, Router} from '@angular/router';
import { User } from "../../../../shared/models/user";

@Component({
  selector: 'app-profile-datos',
  templateUrl: './profile-datos.component.html',
  styleUrls: ['./profile-datos.component.scss'],
  providers: [UserService]
})
export class ProfileDatosComponent implements OnInit {

  @Input() user: User;

  public formDatos: FormGroup;


  constructor(
      private _userservice: UserService,
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private location: Location
  ) { }

  ngOnInit() {
    this.getUser();

    this.formDatos = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      'surname': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      'email': ['', [Validators.required, Validators.email]],
      'address': this.formBuilder.group({
          'street': ['' , [Validators.required]],
          'zone': ['', [Validators.required]],
          'city': ['', [Validators.required]]
      })
    });
  }

  getUser(): void {
    const id = +this._route.snapshot.paramMap.get('id');
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
            }
          }
          if (encontrado === 0) {
            alert('Usuario incorrecto');
          }
        });
  }
  save(): void {
        this._userservice.updateUser(this.user)
            .subscribe(() => this.goBack());
  }


  get name() { return this.formDatos.get('name'); }
  get surname() { return this.formDatos.get('surname'); }
  get email() { return this.formDatos.get('email'); }

  goBack(): void {
      this.location.back();
  }

}
