import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Card } from '../models/Card';
import { Api_Url } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http: HttpClient) { }

  getCards(did: string) {
    return this._http.get(`${Api_Url}api/Flashcard?did=${did}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createCard(card: Card) {
    return this._http.post(`${Api_Url}api/Flashcard`, card, { headers: this.getHeaders() });
  }

  getCard(id: string, did: string) {
    return this._http.get(`${Api_Url}api/Flashcard/${id}?did=${did}`, { headers: this.getHeaders() });
  }

  updateCard(card: Card) {
    return this._http.put(`${Api_Url}api/Flashcard`, card,{headers: this.getHeaders()})
  }

  deleteCard(id: number){
    return this._http.delete(`${Api_Url}api/Flashcard/${id}`, { headers: this.getHeaders()});
  }

  
}
