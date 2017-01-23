import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AppStore } from './store'
import { StoreLiteService } from './store-lite.service'
import { CheckoutComponent } from './checkout.component'


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, CheckoutComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
      AppStore,
      StoreLiteService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
