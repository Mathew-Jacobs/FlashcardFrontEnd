import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card';
import { MatTableDataSource} from '@angular/material'
@Component({
  selector: 'app-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css']
})
export class CardIndexComponent implements OnInit {

  columnNames = ['CardID', 'Term', 'Definition', 'NumberTimesReviewed'];
  dataSource: MatTableDataSource<Card>;
 
  constructor(private _cardService: CardsService) { }

  ngOnInit() {
    this._cardService.getCards().subscribe((cards: Card[]) =>{
      this.dataSource =  new MatTableDataSource <Card>(cards);
      console.log(cards)
    });
  }

}
