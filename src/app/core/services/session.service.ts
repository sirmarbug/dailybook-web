import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { auth, User, UserInfo } from 'firebase';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private userInfo: UserInfo;

  // private currentUser$: BehaviorSubject<User>;

  get currentUser(): UserInfo {
    return this.userInfo;
  }

  get currentUserId(): string {
    return this.userInfo.uid;
  }

  constructor(
    public afAuth: AngularFireAuth,
    private logger: NGXLogger
  ) {
    // this.currentUser$ = new BehaviorSubject(null);
    this.afAuth.authState.subscribe((res: User) => {
      this.onAuthUserUpdated(res.providerData);
    });
  }

  private onAuthUserUpdated(userInfo: UserInfo[]) {
    if (userInfo === null || userInfo.length < 1) {
      this.onAuthReset();
      return;
    }
    this.userInfo = userInfo[0];
    this.logger.debug(this.userInfo);
  }

  private onAuthReset() {
    this.logger.debug('onAuthReset');
    this.userInfo = null;
  }

  registerWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(mail, password));
  }

  loginWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(mail, password));
  }

}
