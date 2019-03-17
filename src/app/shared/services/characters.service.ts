import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Character } from '@app/shared/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  fetchCharacters(page = 1, name?) {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('pageSize', '40');

    if (name) {
      params = params.append('name', name);
    }

    return this.http.get<Character[]>('/api/characters', { params: params });
  }
}
