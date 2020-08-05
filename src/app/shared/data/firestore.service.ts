import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Song } from '../../models/song.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }
}
