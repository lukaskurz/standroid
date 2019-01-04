import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap, map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Report } from '../../shared/models/report';

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

        return this.afs.collection<{}>("installations", (ref) => {
          return ref.where("creator_uid", "==", user.uid);
        }).valueChanges().pipe(take(1)).toPromise();
      })
      .then(installations => {
        if (installations.length <= 0) {
          this.router.navigateByUrl("/install");
          return Promise.reject();
        } else {
          return Promise.resolve();
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
