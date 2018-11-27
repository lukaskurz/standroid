import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { LoginError } from '../util/login-error';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(private firebaseAuthentication: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.user = this.firebaseAuthentication.authState;
  }

  emailAndPasswordLogin(email: string, password: string) {
    return this.firebaseAuthentication.auth.signInWithEmailAndPassword(email, password)
      .then(credentials => {
        if (!!credentials && credentials.user.emailVerified === true) {
          return Promise.resolve(credentials);
        } else {
          const error: LoginError = { code: "auth/not-verified", message: "The email has not been verified." };
          return Promise.reject(error);
        }
      });
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.firebaseAuthentication.auth.signInWithPopup(provider);
  }


  private updateUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      verified: user.emailVerified
    };

    return userRef.set(data, { merge: true });
  }


  signOut() {
    this.firebaseAuthentication.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  register(email: string, password: string) {
    return this.firebaseAuthentication.auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      this.updateUserData(cred.user);
    });
  }
}
