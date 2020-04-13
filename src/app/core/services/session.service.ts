import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import { auth, UserInfo } from 'firebase';
import { NGXLogger } from 'ngx-logger';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { User } from '@core/models/user';

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
    private logger: NGXLogger,
    private db: AngularFirestore,
  ) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
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

  private initialUser(user: any): any {
    this.createUser(user).subscribe(() => {});
  }

  private createUser(user: any): Observable<void> {
    const userDocument = this.db.collection('users').doc(user.id);
    return from(userDocument.set({ ...user }));
  }

  registerWithEmail(mail: string, password: string, firstName: string, lastName: string): Observable<any> {
    const register = from(this.afAuth.auth.createUserWithEmailAndPassword(mail, password));
    return register.pipe(
      map(_ => {
        const newUser = new User(
          _.user.uid,
          firstName,
          lastName,
          mail
        );
        this.initialUser(newUser);
      })
    );
  }

  loginWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(mail, password));
  }
}
