

import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from './app.reducer'
import { Observable } from 'rxjs'
import { Toast } from './toaster.reducer'

const NULL_TOAST: Toast = {
  message: '',
  messageType: 'none' as any,
}

@Component({
  moduleId: module.id,
  selector: 'ss-toaster',
  templateUrl: 'toaster.component.html',
})
export class ToasterComponent implements OnInit {

  toast$: Observable<Toast>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.toast$ = this.store.select(s => s.toaster.displayed)
      .map(toast => toast || NULL_TOAST)
  }

}
