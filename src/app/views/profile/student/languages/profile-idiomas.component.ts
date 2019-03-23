import {Component, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

import { ListIdiomas } from '../../../../shared/models/list-idiomas';
import { MockService } from '../../../../shared/services/mock.service';
import { ListNivelesIdiomas } from '../../../../shared/models/list-niveles-idiomas';


@Component({
  selector: 'app-profile-idiomas',
  templateUrl: './profile-idiomas.component.html',
  styleUrls: ['./profile-idiomas.component.scss'],
  providers: [UserService]
})
export class ProfileIdiomasComponent implements OnInit {

    @Input() user: User;
    @Output() users: User[];
    @Output() items: ListIdiomas[];
    @Output() niveles: ListNivelesIdiomas[];

    public lid;
    public formIdioma: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _userservice: UserService,
      private _location: Location,
      private _mockservice: MockService
  ) {}

  ngOnInit() {
      this.lid = +this._route.snapshot.paramMap.get('lid');
      // Obtenemos lista de idiomas
      this.getIdioma();
      // Obtenemos lista de niveles de idiomas
      this.getNivelesIdiomas();
      // Obtenemos el usuario
      this.getUserById();
      // Si cambiamos en Formulario
      this.onChanges();
      this.formIdioma = this.formBuilder.group({
          'idioma': ['Elige tu idioma'],
          'nivel_idioma': ['Elige tu nivel'],
      });
  }


    onChanges() {
        // Validación Formulario
    }

    getIdioma() {
        this._mockservice.getIdiomas()
            .subscribe(items => this.items = items);
    }
    getNivelesIdiomas() {
        this._mockservice.getNivelesIdiomas()
            .subscribe(niveles => this.niveles = niveles);
    }

    getUserById() {
      const id = +this._route.snapshot.paramMap.get('id');
      this._userservice.getUser(id)
            .subscribe(user => {this.user = user; this.updateForm(user); });
    }
    updateForm(user: User) {
        this.formIdioma.patchValue({
            idioma: user.languages[this.lid].idioma,
            nivel_idioma: user.languages[this.lid].nivel,
            fecha: user.languages[this.lid].fecha
        });
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
