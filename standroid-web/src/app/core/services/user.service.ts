import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: ReplaySubject<firebase.User>;
  constructor(private fireAuth: AngularFireAuth) {
    this.user = new ReplaySubject(1);
    this.fireAuth.user.subscribe(this.user);
  }

  getUser() {
    return this.user.asObservable();
  }

}
