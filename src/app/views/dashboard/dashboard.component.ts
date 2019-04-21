import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SigninService } from '../signin/signin.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app.state';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
  ) {}
}
