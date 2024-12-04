import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
   private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Nashwa Corner',
      'assets/pictures/Ottawa1.jpg',
      'A little break, the fresh air, a pure pleasure 🫁',
      new Date(),
      10
    ).withLocation("Ottawa"),
    new FaceSnap(
      'Cookie the Vacuum',
      'assets/pictures/coo1.jpg',
      'An appropriate name for this "little" eater.\n' +
      'Need to clean up some food? Call him, and you will not regret it!',
      new Date(),
      200
    ),
    new FaceSnap(
      'Naylah the warrior',
      'assets/pictures/Nay1.jpg',
      'We knew Xena, the Warrior Princess, but let me introduce you to Naylah, the Fearless Warrior.'+
      ' If she could speak, she would say, I am the danger, Skyler',
      new Date(),
      150
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(faceSnapId:string, snapType: SnapType){
    const foundFaceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('Facesnap not found');
    }
    foundFaceSnap.snap(snapType);
  }
}
