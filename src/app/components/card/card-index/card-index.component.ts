import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { trigger, state, style, transition, animate } from '../../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class CardIndexComponent implements OnInit {

  flip: string = 'inactive';
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

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  nextCard() {
    this.cardNum += 1;
  }

  backToBeginning() {
    this.cardNum = 0;
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
