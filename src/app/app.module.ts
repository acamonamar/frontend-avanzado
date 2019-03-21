import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

import { rootRouterConfig } from './app-routing';

import { FakeBackendService } from "./shared/inmemory-db/fake-backend.service";
import { UserService } from "./shared/services/user.service";

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        FakeBackendService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(rootRouterConfig, { enableTracing: true }),

  ],
  declarations: [AppComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
