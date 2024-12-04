import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  userHasSnapped!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

@Input() facesnap!: FaceSnap;

  ngOnInit(): void {
    this.snapButtonText = "Oh Snap!"
    this.userHasSnapped = false;

  }

  onSnap(){
    if(this.userHasSnapped){
      this.unSnap()
    }else
      this.snap()
  }

  snap(){
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap');
    this.snapButtonText = 'Unsnap..💔';
    this.userHasSnapped = true;
  }

  unSnap(){
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap ❤️';
    this.userHasSnapped = false;
  }

}
