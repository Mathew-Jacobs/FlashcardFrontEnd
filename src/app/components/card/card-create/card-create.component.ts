import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, RouteConfigLoadStart } from '@angular/router';
import { Deck } from '../../../models/Deck'
import { DecksService } from '../../../services/decks.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  cardForm: FormGroup;
  deck: Deck;

  constructor(private _activatedRoute: ActivatedRoute, private _cardService: CardsService, private _form: FormBuilder, private _router: Router, private _deckService: DecksService) {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._deckService.getDeck(routeData.get('id')).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck
        this.createForm()
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.cardForm = this._form.group({
      DeckID: new FormControl(this.deck.DeckID),
      Term: new FormControl,
      Definition: new FormControl
    });
  }

  onSubmit() {
    this._cardService.createCard(this.cardForm.value).subscribe(data => { this._router.navigate(['/cards'])})
  }
}
