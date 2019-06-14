import {Component, Input} from '@angular/core';
import {User} from '../../models/user.model';
import {getProfile} from '../../states/user';
import {Store} from '@ngrx/store';
import {AppStore} from '../../states/store.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent {
  user$: Observable<User>;
  @Input() user: User;

  constructor(private store$: Store<AppStore>) {
    this.user$ = this.store$.select(getProfile);
    console.log(this.user$);
  }

}
