import {Component, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Idiomas } from '../../../../shared/inmemory-db/idiomas';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-profile-idiomas',
  templateUrl: './profile-idiomas.component.html',
  styleUrls: ['./profile-idiomas.component.scss'],
  providers: [UserService]
})
export class ProfileIdiomasComponent implements OnInit {

    @Input() user: User;
    @Output() users: User[];
    @Input() idiomas: Idiomas[];


    public lid;
    public formIdioma: FormGroup;
    public idioma;


  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService,
      private _location: Location
  ) {}

  ngOnInit() {
      this.lid = +this._route.snapshot.paramMap.get('lid');

      // Validación Formulario
      this.formIdioma = this.formBuilder.group({
          'nivel_idioma': [''],
      });

      // Obtenemos el usuario
      this.getUserById();
      this.onChanges();
  }

    onChanges(): void {
        this.lid = +this._route.snapshot.paramMap.get('lid');
        const id = +this._route.snapshot.paramMap.get('id');
        this._userservice.getUser(id)
            .subscribe(user => this.user = user);
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
