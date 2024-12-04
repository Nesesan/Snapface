import {SnapType} from './snap-type.type';

export class FaceSnap{

  location?:string;
  id:string;

  constructor(public title: string,
              public pictureUrl: string,
              public description: string,
              public createdAt: Date,
              public snaps: number) {
    this.id = crypto.randomUUID().substring(0,8);
  }


  addSnap(){
    this.snaps++;
  }
  removeSnap(){
    this.snaps--;
  }

  snap(snapType: SnapType){
    if(snapType === 'snap' ){
      this.addSnap();
    }else if(snapType === 'unsnap' ){
      this.removeSnap();
    }
  }

  setLocation(location:string){
    this.location = location;
  }

  withLocation(location:string): FaceSnap{
    this.setLocation(location);
    return this;
  }
}
