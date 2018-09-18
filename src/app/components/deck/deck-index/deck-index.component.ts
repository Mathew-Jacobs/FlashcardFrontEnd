import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { Deck } from '../../../models/Deck';
import { MatTableDataSource } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-deck-index',
  templateUrl: './deck-index.component.html',
  styleUrls: ['./deck-index.component.css']
})
export class DeckIndexComponent implements OnInit {

  columnNames = ['details', 'DeckID', 'Title', 'PercentComplete', 'buttons'];
  dataSource: MatTableDataSource<Deck>;

  constructor(private _deckService: DecksService) { }

  ngOnInit() {
    this._deckService.getDecks().subscribe((decks: Deck[]) => {
      this.dataSource = new MatTableDataSource<Deck>(decks);
    });
  }

}