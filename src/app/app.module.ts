import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';

import { AppComponent } from './app.component';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/services/fake-backend.service';
import {AppService} from './app.service';


@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
    BrowserModule,
      FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    RouterModule.forRoot(rootRouterConfig, { enableTracing: true }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
