import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../../services/decks.service';
import { Deck } from '../../../models/Deck';
import { MatGridList, MatDialog } from '../../../../../node_modules/@angular/material';
import { DeckDeleteComponent } from '../deck-delete/deck-delete.component';

@Component({
  selector: 'app-deck-index',
  templateUrl: './deck-index.component.html',
  styleUrls: ['./deck-index.component.css']
})
export class DeckIndexComponent implements OnInit {

  columnNames = ['details', 'DeckID', 'Title', 'PercentComplete', 'buttons'];
  dataSource: Deck[];

  constructor(private _deckService: DecksService, public dialog: MatDialog) { }

  ngOnInit() {
    this._deckService.getDecks().subscribe((decks: Deck[]) => {
      this.dataSource = decks;
    });
  }

  openDialog( id ) {
    const dialogRef = this.dialog.open(DeckDeleteComponent, {
      data: {
        id
      }
    });

    console.log(id);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}