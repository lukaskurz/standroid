import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.user.subscribe(this.user);
  }

  getUser() {
    return this.user.asObservable();
  }

}
