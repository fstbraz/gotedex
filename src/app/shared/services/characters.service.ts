import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '@app/shared/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  fetchCharacters(page = 1, name?) {
    return this.http.get<Character[]>(`/api/characters?page=${page}&pageSize=40&name=${name ? name : ''}`);
  }
}
