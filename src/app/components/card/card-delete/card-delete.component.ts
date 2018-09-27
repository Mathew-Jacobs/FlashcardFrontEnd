import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Card } from '../../../models/Card';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})
export class CardDeleteComponent implements OnInit {
  
  card: Card;
  
  constructor(private _cardService: CardsService, private _ar: ActivatedRoute,private _router: Router){
  this._ar.paramMap.subscribe(p => {
    this._cardService.getCard(p.get('id'), p.get('did')).subscribe((singleCard: Card) => {
      this.card = singleCard;
    });
  });
}
  ngOnInit() {
  }
 
  onDelete() {
    this._cardService.deleteCard(this.card.CardID).subscribe(() => {
      this._router.navigate(['/cards']);
    });
  }
}
