import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Deck } from '../../../models/Deck'

@Component({
  selector: 'app-deck-edit',
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.css']
})
export class DeckEditComponent implements OnInit {

  deck: Deck;

  editDeckForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _deckService: DecksService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._deckService.getDeck(p.get('id')).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editDeckForm = this._form.group({
      DeckID: new FormControl(this.deck.DeckID),
      Title: new FormControl(this.deck.Title),
      Description: new FormControl(this.deck.Description)
    });
  }

  onSubmit(form) {
    const updateDeck: Deck = {
      DeckID: form.value.DeckID,
      Title: form.value.Title,
      Description: form.value.Description   
    }
    this._deckService.updateDeck(updateDeck).subscribe(d => {
      this._router.navigate(['/decks']);
    })
  }
}
