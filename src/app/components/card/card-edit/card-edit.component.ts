import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  card: Card;

  editCardForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _cardService: CardsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

                this._ar.paramMap.subscribe(p => {
                  this._cardService.getCard(p.get('id'), p.get('did')).subscribe((singleCard: Card)=>{
                    this.card = singleCard;
                    this.createForm();
                  })
                })
              }
  ngOnInit() {
  }

  createForm(){
    this.editCardForm = this._form.group({
      CardID: new FormControl(this.card.CardID),
      DeckID: new FormControl(this.card.DeckID),   
      Term: new FormControl(this.card.Term),
      Definition: new FormControl(this.card.Definition)
    });
  }

  onSubmit(form){
    const updateCard: Card = {
      Term: form.value.Term,
      Definition: form.value.Definition
    };
    this._cardService.updateCard(updateCard).subscribe(c => {this._router.navigate(['/cards'])})
  }
}
