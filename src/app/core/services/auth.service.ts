import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(mail, password));
  }

  loginWithEmail(mail: string, password: string): Observable<auth.UserCredential> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(mail, password));
  }

}
