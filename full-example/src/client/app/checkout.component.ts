import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CheckoutData } from './checkout.reducer'

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  @Output()
  submissions = new EventEmitter<CheckoutData>();

  constructor(private formBuilder: FormBuilder) {
  }

  submit() {
    this.submissions.emit(this.checkoutForm.value);
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ['', [
        Validators.minLength(2),
        Validators.maxLength(3000),
        Validators.required
      ]],
      cardNumber: ['', [Validators.pattern(/^\s*(\d{4}[-\s*]?){4}\s*$/)]],
    });
  }
}
