/**
 * Import the operators we wish to add to the Observable prototype, for use in chaning
 */
// import "rxjs/Rx" - everything!!!

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/concatMap";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/catch";

import "rxjs/add/observable/of";
import "rxjs/add/observable/from";

