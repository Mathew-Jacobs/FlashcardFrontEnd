import { Component, OnInit, Inject } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Deck } from '../../../models/Deck';
import { MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { DeckIndexComponent } from '../deck-index/deck-index.component';

@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {

  decks: Deck[];
  deck: Deck;

  constructor(private _deckService: DecksService, @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router) { 
      this._deckService.getDeck(data.id).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck;
      });
      this._deckService.getDecks().subscribe((decksData: Deck[]) => {
        this.decks = decksData;
      });
  }

  ngOnInit() {
  }

  onDelete() {
    this._deckService.deleteDeck(this.deck.DeckID).subscribe();
  }
}
