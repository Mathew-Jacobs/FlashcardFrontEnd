import { Component, OnInit, Inject } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Deck } from '../../../models/Deck';
import { MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {

  deck: Deck;

  constructor(private _deckService: DecksService, @Inject(MAT_DIALOG_DATA) public data: any, private _router: Router) { 
    console.log(data);
      this._deckService.getDeck(data.id).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck;
      });
  }

  ngOnInit() {
  }

  onDelete() {
    this._deckService.deleteDeck(this.deck.DeckID).subscribe(() => {
      this._router.navigate(['/decks']);
    })
  }
}
