import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Deck } from '../../../models/Deck';

@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {

  deck: Deck;

  constructor(private _deckService: DecksService, private _ar: ActivatedRoute, private _router: Router) { 
    this._ar.paramMap.subscribe(p => {
      this._deckService.getDeck(p.get('id')).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck;
      });
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
