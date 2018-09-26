import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecksService } from '../../../services/decks.service'
import { Deck } from '../../../models/Deck'
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {

  deck: Deck;
  cardList: Card[];

  constructor(private _activatedRoute: ActivatedRoute, private _deckService: DecksService, private _cardService: CardsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._deckService.getDeck(routeData.get('id')).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck
      });
      this._cardService.getCards(routeData.get('id')).subscribe((cards: Card[]) => {
        this.cardList = cards;
      })
    });
  }

}
