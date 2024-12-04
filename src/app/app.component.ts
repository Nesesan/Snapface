import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnap} from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  mysnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myThirdSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Nashwa Corner',
        'assets/pictures/Ottawa1.jpg',
        'A little break, the fresh air, a pure pleasure 🫁',
        new Date(),
        10
      ),
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
    this.faceSnaps[0].setLocation('Ottawa downtown')
  }
}
