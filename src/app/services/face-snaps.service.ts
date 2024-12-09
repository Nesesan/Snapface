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
    ),
     new FaceSnap(
       'Coffee street',
       'assets/pictures/Ottawa2.jpg',
       'I give you my word, i just drunk 2 expressos ✌️' ,
       new Date(),
       230
     ),
     new FaceSnap(
       'Let me call you sir!',
       'assets/pictures/indianCoat.jpg',
       'In the museum, I felt it calling me secretly: Come, you want to be classy? Come!',
       new Date(),
       178
     )
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId:string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap =>faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('Facesnap not found');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId:string, snapType: SnapType){
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
    }

    addFaceSnap(formValue: {title: string, pictureUrl: string, description: string, location?: string}): void {
      const faceSnap = new FaceSnap(
        formValue.title,
        formValue.pictureUrl,
        formValue.description,
        new Date(),
        0
      );
      if (formValue.location) {
        faceSnap.setLocation(formValue.location);
      }
      this.faceSnaps.push(faceSnap);
    }
}

