import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFirestore,
  ) {}

  createUser(user: User): Observable<void> {
    const userDocument = this.db.collection('users').doc(user.id);
    return from(userDocument.set({ ...user }));
  }
}
