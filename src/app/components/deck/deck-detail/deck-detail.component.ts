import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecksService } from '../../../services/decks.service'
import { Deck } from '../../../models/Deck'
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/Card';
import { MatTableDataSource, MatDialog } from '../../../../../node_modules/@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CardDeleteComponent } from '../../card/card-delete/card-delete.component';


@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DeckDetailComponent implements OnInit {

  deck: Deck;
  cardList: Card[];
  dataSource: MatTableDataSource<Card>
  columnNames = ['terms','buttons'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private _activatedRoute: ActivatedRoute, private _deckService: DecksService, private _cardService: CardsService, private dialog: MatDialog) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._deckService.getDeck(routeData.get('id')).subscribe((singleDeck: Deck) => {
        this.deck = singleDeck
      });
      this._cardService.getCards(routeData.get('id')).subscribe((cards: Card[]) => {
        this.cardList = cards;
        this.dataSource = new MatTableDataSource<Card>(cards);
      })
    });
  }

  openDialog( id ) {
    const dialogRef = this.dialog.open(CardDeleteComponent, {
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
      {
        this.dataSource.data = this.dataSource.data.filter(h => h.CardID !== id)
      }
    });
  }

}
