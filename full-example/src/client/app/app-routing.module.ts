import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CheckoutSmartComponent } from './checkout-smart.component'

const appRoutes: Routes = [
  { path: '', component: CheckoutSmartComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

