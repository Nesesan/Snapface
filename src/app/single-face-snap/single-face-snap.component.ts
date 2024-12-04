import {Component,OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  facesnap!: FaceSnap;
  userHasSnapped!: boolean;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getfaceSnap();
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

  private getfaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = "Oh Snap!"
    this.userHasSnapped = false;
  }
}
