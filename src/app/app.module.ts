import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';

//NGRX
import { StoreModule } from '@ngrx/store';
import {appReducers} from './shared/store/app.state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {SigninService} from './views/signin/signin.service';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './shared/store/user/user.effects';
import {OffersEffects} from './shared/store/offers/offers.effects';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
      StoreModule.forRoot(appReducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
      EffectsModule.forRoot([UserEffects, OffersEffects])
  ],
  declarations: [AppComponent],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule {}
