import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SneakersModel } from 'src/app/models/sneakers.model.';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers-list',
  templateUrl: './sneakers-list.component.html',
  styleUrls: ['./sneakers-list.component.css']
})
export class SneakersListComponent implements OnInit, OnDestroy {

  sneakers: SneakersModel[] = [];
  filterCategory: SneakersModel[] = [];
  searchKey: string = "";
  selectedCategory = false;
  
  private sub: Subscription;

  constructor(
    private sneakerService: SneakersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.sneakerService.sneakersChanged.subscribe(
      (sneakers: SneakersModel[]) => {
        this.sneakers = sneakers;
        this.filterCategory = sneakers;
      }
    );

    this.sneakers = this.sneakerService.getSnickers();
    this.sneakerService.search.subscribe( val => {
      this.searchKey = val;
    })
  }

  filter(category: string) {
    this.filterCategory = this.sneakers.filter((sneaker: SneakersModel) => {
      if (sneaker.category === category || category == '') {
        this.selectedCategory = true;
        return sneaker;
      }
    });
  }

  onNewSneaker() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
