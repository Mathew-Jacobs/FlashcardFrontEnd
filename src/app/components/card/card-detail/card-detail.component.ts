import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card'

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  card: Card;
  constructor(private _activatedRoute: ActivatedRoute, private _cardService: CardsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._cardService.getCard(routeData.get('id')).subscribe((singleCard: Card) => {this.card = singleCard;})
      console.log(routeData);
    })
  }

}
