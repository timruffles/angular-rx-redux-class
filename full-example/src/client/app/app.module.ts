import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutComponent } from './checkout.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CheckoutSmartComponent } from './checkout-smart.component'
import { StoreModule } from '@ngrx/store'
import { reducer, AppState } from './app.reducer'
import { EffectsModule } from '@ngrx/effects'
import { CheckoutEffects } from './checkout.effects'

import "./operators"
import { storeLogger } from 'ngrx-store-logger'


@NgModule({
  imports: [
	  BrowserModule,
	  HttpModule,
	  AppRoutingModule,
	  ReactiveFormsModule,
	  StoreModule.provideStore(storeLogger()(reducer), new AppState),
    EffectsModule.run(CheckoutEffects)
  ],

  declarations: [AppComponent, CheckoutComponent, CheckoutSmartComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
