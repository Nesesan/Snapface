export class FaceSnap{

  constructor(public title: string,
              public pictureUrl: string,
              public description: string,
              public createdAt: Date,
              public snaps: number) {}


  addSnap(){
    this.snaps++;
  }
  removeSnap(){
    this.snaps--;
  }
}
