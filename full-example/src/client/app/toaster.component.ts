

import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from './app.reducer'
import { Toast } from './toaster.reducer'

type Maybe<T> = T | undefined;

@Component({
  selector: 'ss-toaster',
  host: {
    '[class.success]': 'toast?.messageType === "success"',
    '[class.error]': 'toast?.messageType === "error"',
    '[class.displayed]': 'toast?.message != null',
  },
  template: "Toast {{ toast?.message }}"
})
export class ToasterComponent implements OnInit {

  public toast: Maybe<Toast>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.subscribe(s => {
      this.toast = s.toaster.displayed;
    })
  }



}
