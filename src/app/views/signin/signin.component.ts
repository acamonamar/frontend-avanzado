import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
// PEC 2 NGRX
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ActivarLoadingAction, DesactivarLoadingAction} from '../../shared/store/ui/ui.actions';
import {AppState} from '../../shared/store/app.state';
import { User} from '../../shared/models/user.model';
import * as fromUserActions from '../../shared/store/user/user.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;
  errorLogin = false;
  cargando: boolean;
  subscription: Subscription;
  user: User;

  constructor(
    private signinService: SigninService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
    this.subscription = this.store.select('ui').subscribe(uiState => {
      this.cargando = uiState.isLoading;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch( new ActivarLoadingAction());
    this.store.dispatch(new fromUserActions.LogIn(this.loginForm.value));
    this.router.navigate(['admin/dashboard/']);
    this.store.dispatch( new DesactivarLoadingAction());
  }

}
