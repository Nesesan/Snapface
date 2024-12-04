import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  pictureUrl!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  userHasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.title = "Nashwa Corner";
    this.pictureUrl = "assets/pictures/Ottawa1.jpg";
    this.description = "A little break, the fresh air, a pure pleasure 🫁";
    this.createdAt = new Date();
    this.snaps = 100;
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
    this.snaps++;
    this.snapButtonText = 'Unsnap..💔';
    this.userHasSnapped = true;
  }

  unSnap(){
    this.snaps--;
    this.snapButtonText = 'Oh Snap ❤️';
    this.userHasSnapped = false;
  }

}
