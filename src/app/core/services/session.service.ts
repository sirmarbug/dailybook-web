import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of, forkJoin } from 'rxjs';
import { auth, UserInfo } from 'firebase';
import { NGXLogger } from 'ngx-logger';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, switchMap } from 'rxjs/operators';
import { User } from '@core/models/user';
import { Journal } from '@core/models/journal';
import { Post } from '@core/models/post';

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
    const createUser = this.createUser(user);
    const createDefaultJournal = this.createDefaultJournal(user.id);
    forkJoin([createUser, createDefaultJournal]).pipe(
      tap(_ => {
        console.log('tap', _);
        this.createDefaultPost(user.id, _[1]);
      })
    ).subscribe(res => {
      console.log('sub forkJoin', res);
    });
  }

  private createUser(user: any): Observable<any> {
    const userDocument = this.db.collection('users').doc(user.id);
    return from(userDocument.set({ ...user }));
  }

  private createDefaultJournal(userId: string): Observable<any> {
    const journalDocument = this.db.collection(`journals`).doc(userId).collection('items');
    const defaultJournal = new Journal();
    return from(journalDocument.add({...defaultJournal})).pipe(
      switchMap(_ => {
        _.update('id', _.id);
        console.log('createDefaultJournal', _);
        return of(_.id);
      })
    );
  }

  private createDefaultPost(userId: string, journalId: string): Observable<any> {
    const postDocument = this.db.collection(`posts`).doc(userId).collection('journals').doc(journalId).collection('items');
    const defaultPost = new Post('0', 'Przykładowy post', 'To jest jakiś przykładowy post', ['post', 'today'], userId, journalId);
    return from(postDocument.add({...defaultPost})).pipe(
      switchMap(_ => {
        _.update('id', _.id);
        console.log('createDefaultPost', _);
        return of(_.id);
      })
    );
  }

  registerWithEmail(mail: string, password: string, firstName: string, lastName: string): Observable<any> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(mail, password)).pipe(
      tap(_ => {
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
