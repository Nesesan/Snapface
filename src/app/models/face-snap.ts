export class FaceSnap{

  location?:string;

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

  setLocation(location:string){
    this.location = location;
  }
}
