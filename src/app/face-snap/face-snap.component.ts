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

  ngOnInit(): void {
    this.title = "Nashwa Corner";
    this.pictureUrl = "assets/pictures/Ottawa1.jpg";
    this.description = "A little break, the fresh air, a pure pleasure 🫁";
    this.createdAt = new Date();
    this.snaps = 100;
  }

}
