import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private _cardService: CardsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.cardForm = this._form.group({
      Term: new FormControl,
      Definition: new FormControl
    });
  }
  onSubmit() {
    this._cardService.createCard(this.cardForm.value).subscribe(data => { this._router.navigate(['/cards'])})
  }
}
