import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {

  constructor() { }

// Observable string sources
  private emitChangeSource = new Subject<any>();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
