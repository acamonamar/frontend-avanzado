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
    @Output() userEdit: User;
    @Input() item: ListIdiomas;
    @Output() items: ListIdiomas[];
    @Output() niveles: ListNivelesIdiomas[];

    public lid;
    public nuevo_lid;
    public valor_idioma;

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

      this.formIdioma = this.formBuilder.group({
          'idioma': [''],
          'nivel_idioma': [''],
          'fecha': [''],
          'nuevo_idioma': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],

      });
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
            fecha: user.languages[this.lid].fecha,
            nuevo_idioma: 'escribe tu idioma'
        });

        this.nuevo_lid = this.user.languages.length;
    }


    save(): void {
        console.log('USUARIO ACTUAL');
        console.log(this.user);

        this.userEdit = this.user;

        if (this.userEdit.languages.length === this.lid) {
            if (!this.userEdit.languages) {
                this.userEdit.languages = [];
            }

            this.user.languages.push({
                id: this.userEdit.id,
                lid: this.lid,
                idioma: this.formIdioma.value.idioma,
                nivel: this.formIdioma.value.nivel_idioma,
                fecha: this.formIdioma.value.fecha
            });
        }

        if (this.formIdioma.value.idioma !== undefined) {
            this.userEdit.languages[this.lid].idioma = this.formIdioma.value.idioma;
        }
        if (this.formIdioma.value.idioma === 'Otros') {
            this.userEdit.languages[this.lid].idioma = this.formIdioma.value.nuevo_idioma;
        }
        if (this.formIdioma.value.nivel_idioma !== undefined) {
            this.userEdit.languages[this.lid].nivel = this.formIdioma.value.nivel_idioma;
        }
        if (this.formIdioma.value.fecha !== undefined) {
            this.userEdit.languages[this.lid].fecha = this.formIdioma.value.fecha;
        }

        console.log('USUARIO MODIFICADO');
        console.log(this.userEdit);
        this._userservice.updateUser(this.userEdit)
            .subscribe();
    }

    get idioma() { return this.formIdioma.get('idioma'); }

    onChange(idioma) {
        console.log('Selected:' + idioma.value);
        this.valor_idioma = idioma.value;
    }
    addIdioma() {
        let add_idioma;
        add_idioma = this.formIdioma.get('nuevo_idioma');
        console.log('Nuevo:' + add_idioma.value);

        let i: number;
        i = this.items.length;
        console.log(i);
        console.log(this.items);
        this.item = { idioma_id: i + 1 , name: add_idioma.value};
        this.items.push(this.item);
        console.log(this.items);
        /* punto 6 - guardamos con localStorage
        localStorage.setItem('datos', JSON.stringify(this.items));
        const guardado = localStorage.getItem('datos');
        console.log('objetoObtenido: ', JSON.parse(guardado));*/
    }

    goBack(): void {
        this._location.back();
    }

}
