

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { CheckoutModel } from './checkout-smart.component'
import { Observable } from 'rxjs/Observable'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup;

  @Output()
  submission = new EventEmitter;

  @Input()
  model: Observable<CheckoutModel>;

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
    this.submission.emit(this.checkoutForm.value);
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: [''],
      cardNumber: [''],
    });

  }
}
