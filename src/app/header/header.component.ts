import { Component, OnInit } from '@angular/core';
import { SneakersService } from '../sneakers/sneakers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm: string = '';

  constructor(private sneakersService: SneakersService) { }

  ngOnInit(): void {
   
  }

  onCityFilter(){
    this.sneakersService.search.next(this.searchTerm)
  }

  onCityFilterClear() {
    this.searchTerm = '';
    this.sneakersService.search.next(this.searchTerm);
  }

}
