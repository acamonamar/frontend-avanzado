import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public title: string;
  public submitted = false;
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = 'Acceso';
    this.formLogin = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  submit( ) {
    this.submitted = true;
    if (this.formLogin.invalid){
      return;
    }
    alert('TOMA YA! ');
  }
}
