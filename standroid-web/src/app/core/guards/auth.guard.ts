import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private afs: AngularFirestore, private router: Router) { }

  canActivate(route, state) {
    return this.auth.user.pipe(take(1)).toPromise()
      .then(user => {
        if (user == null) {
          this.router.navigateByUrl("/login");
          return Promise.reject();
        }

        if (user.emailVerified === false) {
          this.router.navigateByUrl("/email-verification");
          return Promise.reject();
        }
      })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
