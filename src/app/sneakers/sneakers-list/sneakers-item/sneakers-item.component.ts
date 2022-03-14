import { Component, Input, OnInit } from '@angular/core';
import { SneakersModel } from 'src/app/models/sneakers.model.';

@Component({
  selector: 'app-sneakers-item',
  templateUrl: './sneakers-item.component.html',
  styleUrls: ['./sneakers-item.component.css']
})
export class SneakersItemComponent implements OnInit {
@Input() sneaker: SneakersModel;
@Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
