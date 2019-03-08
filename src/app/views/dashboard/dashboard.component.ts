import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProfileService]
})
export class DashboardComponent implements OnInit {
  public identity;
  constructor(
      private _profileservice: ProfileService
  ) {}

  ngOnInit() {
    this.identity = this._profileservice.getIdentity();
  }

}
