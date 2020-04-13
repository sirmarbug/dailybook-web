import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { auth, User, UserInfo } from 'firebase';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userId: string;
  private userInfo: UserInfo;

  get currentUserInfo(): UserInfo {
    return this.userInfo;
  }

  get currentUserId(): string {
    return this.userId;
  }

  constructor(
    private afAuth: AngularFireAuth,
    private logger: NGXLogger
  ) {
    this.afAuth.authState.subscribe((user: User) => {
      this.onAuthUserUpdated(user.providerData, user.uid);
    });
  }

  private onAuthUserUpdated(userInfo: UserInfo[], uid: string) {
    if (!userInfo || userInfo.length < 1 || !uid) {
      this.onAuthReset();
      return;
    }
    this.userInfo = userInfo[0];
    this.userId = uid;
  }

  private onAuthReset() {
    this.logger.debug('onAuthReset');
    this.userInfo = null;
    this.userId = null;
  }

  registerWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(mail, password));
  }

  loginWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(mail, password));
  }
}
