import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deck } from '../models/Deck'

const ApiUrl = 'http://flashfocus.azurewebsites.net/api'

@Injectable()
export class DecksService {

  constructor(private _http: HttpClient) { }

  getDecks() {
    return this._http.get(`${ApiUrl}/Deck`, { headers: this.getHeaders() });
  }

  createDeck(deck: Deck) {
    return this._http.post(`${ApiUrl}/Deck`, deck, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

