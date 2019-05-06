import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomMaterialModule } from "../../shared/material/material.module";

@NgModule({
  declarations: [SigninComponent],
  imports: [SharedModule, SigninRoutingModule, CustomMaterialModule],
  providers: []
})
export class SigninModule {}
