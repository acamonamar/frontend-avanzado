import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

/* Componentes */
import { AppComponent } from './app.component';

import { FakeBackendService } from './shared/services/fake-backend.service';
import { AppService } from './app.service';
import { SigninService } from './shared/services/signin.service';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    ReactiveFormsModule,
      HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    RouterModule.forRoot(rootRouterConfig, { enableTracing: true }),
  ],
  providers: [
      AppService,
    SigninService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
