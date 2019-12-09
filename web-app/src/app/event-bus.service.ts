import { UserMode } from './user/user-mode.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  lastUserMode: UserMode = new UserMode();

  private userModeSource = new BehaviorSubject<UserMode>(this.lastUserMode);
  currentUserMode = this.userModeSource.asObservable();

  constructor() { }

  chaneUserMode(userMode: UserMode) {
    this.userModeSource.next(userMode);
  }
}
