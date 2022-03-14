import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SneakersModel } from '../models/sneakers.model.';



@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor() { }
  
  public sneakersChanged = new Subject<SneakersModel[]>();
  public search = new BehaviorSubject<string>("");

  private sneakers: SneakersModel[] = [{ 
    imagePath: 'https://cdn.flightclub.com/TEMPLATE/010428/1.jpg',
    name: 'Air Jordan 4 Retro Military Blue',
    price: 150,
    category: 'Men'
  },
  {
    imagePath: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/054035c0ac6948cfa92cad5c00917054_9366/marimekko-superstar-shoes.jpg',
    name: 'Addidas Superstar',
    price: 200,
    category: 'Woman'
  },
  {
    imagePath: 'https://www.buzzsneakers.com/files/thumbs/files/images/slike-proizvoda/media/315/315122-111/images/thumbs_800/315122-111_800_800px.jpg',
    name: 'Nike AIR FORCE 1 07',
    price: 130,
    category: 'Men'
  },{
    imagePath: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623865394-ultraboost-5-dna-women-1623865332.jpg?crop=0.971xw:0.579xh;0.0144xw,0.377xh&resize=480%3A%2A',
    name: 'Adidas Running Shoes',
    price: 130,
    category: 'Woman'
  }
] 

getSnickers(){
  return this.sneakers;
}

getSnicker(index: number){
  return this.sneakers[index];
}

addSnicker(sneacker: SneakersModel ){
  this.sneakers.push(sneacker);
  this.sneakersChanged.next(this.sneakers.slice());
}

updateSnicker(index: number, newSneacker: SneakersModel){
  this.sneakers[index] = newSneacker;
  this.sneakersChanged.next(this.sneakers.slice());
}

deleteSnicker(index: number){
  this.sneakers.splice(index, 1);
  this.sneakersChanged.next(this.sneakers.slice());
}

}
