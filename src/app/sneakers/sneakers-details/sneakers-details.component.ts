import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SneakersModel } from 'src/app/models/sneakers.model.';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers-details',
  templateUrl: './sneakers-details.component.html',
  styleUrls: ['./sneakers-details.component.css']
})
export class SneakersDetailsComponent implements OnInit {

  sneaker: SneakersModel;
  id:number;

  constructor(private route: ActivatedRoute, private router: Router,private sneakersService: SneakersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.sneaker = this.sneakersService.getSnicker(this.id);
      }
    )
  }

  onEditSnicker(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.sneakersService.deleteSnicker(this.id);
    this.router.navigate(['./'])
  }
}
