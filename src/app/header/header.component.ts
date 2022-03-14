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

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm);
    this.sneakersService.search.next(this.searchTerm);
  }

}
