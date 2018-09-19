import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deck } from '../models/Deck'

const ApiUrl = 'http://apiflashfocus.azurewebsites.net/'

@Injectable()
export class DecksService {

  constructor(private _http: HttpClient) { }

  getDecks() {
    return this._http.get(`${ApiUrl}api/Deck`, { headers: this.getHeaders() });
  }

  createDeck(deck: Deck) {
    return this._http.post(`${ApiUrl}api/Deck`, deck, {headers: this.getHeaders()});
  }

  getDeck(id: string) {
    return this._http.get(`${ApiUrl}api/Deck/${id}`, { headers: this.getHeaders()});
  }

  updateDeck(deck: Deck) {
    return this._http.put(`${ApiUrl}api/Deck`, deck, { headers: this.getHeaders()});
  }

  deleteDeck(id: number) {
    return this._http.delete(`${ApiUrl}api/Deck/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

