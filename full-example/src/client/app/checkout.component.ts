import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group([])
  }
}
