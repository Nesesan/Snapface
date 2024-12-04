import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
@Input() facesnap!: FaceSnap;
  userHasSnapped!: boolean;
  snapButtonText!: string;

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
    this.facesnap.addSnap();
    this.snapButtonText = 'Unsnap..💔';
    this.userHasSnapped = true;
  }

  unSnap(){
    this.facesnap.removeSnap();
    this.snapButtonText = 'Oh Snap ❤️';
    this.userHasSnapped = false;
  }

  protected readonly location = location;
}
