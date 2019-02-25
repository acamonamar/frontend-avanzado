import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: any[] = [];
  constructor(private profileservice: ProfileService) {}
  ngOnInit() {
    this.getProfile();
  }
  getProfile(){
    this.profileservice.loadProfile().subscribe(data =>{
      this.users = data;
    })
  }
}
