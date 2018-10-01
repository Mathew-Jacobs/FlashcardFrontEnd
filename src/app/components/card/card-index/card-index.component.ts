import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css']
})
export class CardIndexComponent implements OnInit {

  dataSource: Card[];
  cardNum: number;

  constructor(private _cardService: CardsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._cardService.getCards(routeData.get('did')).subscribe((cards: Card[]) => {
        this.dataSource = cards;
        console.log(cards)
        this.cardNum = 0;
      });
    });
  }

  nextCard() {
    this.cardNum += 1;
  }

  prevCard() {
    this.cardNum -= 1;
  }

  submitUnderstanding(num: number,card: Card){
    const updateACard: Card = {
      CardID: card.CardID,
      LevelOfUnderstanding: num,
      Term: card.Term,
      Definition: card.Definition,
    };
    this._cardService.updateCard(updateACard).subscribe();
  }
}
