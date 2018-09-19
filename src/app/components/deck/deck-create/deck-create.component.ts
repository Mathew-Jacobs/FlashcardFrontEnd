import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {

  deckForm: FormGroup;

  constructor(private _deckService: DecksService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.deckForm = this._form.group({
      Title: new FormControl,
      Description: new FormControl
    });
  }

  onSubmit() {
    this._deckService.createDeck(this.deckForm.value).subscribe(data => {
      this._router.navigate(['/decks']);
    })
  }
}
