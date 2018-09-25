import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Card } from '../models/Card';

const ApiUrl = 'http://apiflashfocus.azurewebsites.net/'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http: HttpClient) { }

  getCards() {
    return this._http.get('${ApiUrl}/Flashcard', { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createCard(card: Card) {
    return this._http.post('${ApiUrl}/Flashcard', card, { headers: this.getHeaders() });
  }

  getCard(id: string) {
    return this._http.get('${ApiUrl}/Flashcard/${id}', { headers: this.getHeaders() });
  }

  updateCard(card: Card) {
    return this._http.put('${ApiUrl}/Flashcard/', card,{headers: this.getHeaders()})
  }

  deleteCard(id: number){
    return this._http.delete('${ApiUrl}/Flashcard/${id}', { headers: this.getHeaders()});
  }
}
