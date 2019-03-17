import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';
import { Character } from '@app/shared/models/character.model';
import { of } from 'rxjs';

describe('CharactersService', () => {
  let httpClientSpy;
  let charactersService;

  const expectedResponse: Character[] = [
    {
      id: 1,
      url: 'http://got.com',
      name: 'Jon Snow',
      gender: 'Male',
      culture: 'Northem',
      born: '300 AC',
      died: '380 AC',
      titles: ['Lord Commander'],
      aliases: ['North Bastard'],
      father: 'Rhaegar Targaryen',
      mother: 'Lyanna Stark',
      spouse: 'Ygritte‎',
      allengiances: [],
      books: [],
      povBooks: [],
      tvSeries: [],
      playedBy: []
    }
  ];

  const expectedResponseAll: Character[] = [
    {
      id: 1,
      url: 'http://got.com',
      name: 'Jon Snow',
      gender: 'Male',
      culture: 'Northem',
      born: '300 AC',
      died: '380 AC',
      titles: ['Lord Commander'],
      aliases: ['North Bastard'],
      father: 'Rhaegar Targaryen',
      mother: 'Lyanna Stark',
      spouse: 'Ygritte‎',
      allengiances: [],
      books: [],
      povBooks: [],
      tvSeries: [],
      playedBy: []
    },
    {
      id: 1,
      url: 'http://got.com',
      name: 'Daenerys Targaryen',
      gender: 'Female',
      culture: 'Valyrian',
      born: '300 AC',
      died: '380 AC',
      titles: ['Queen of the Andals and the Rhoynar and the First Men, Lord of the Seven Kingdoms'],
      aliases: ['Mother of Dragons'],
      father: '',
      mother: '',
      spouse: '',
      allengiances: [],
      books: [],
      povBooks: [],
      tvSeries: [],
      playedBy: []
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    charactersService = new CharactersService(<any>httpClientSpy);
  });

  it('should return expected characters', () => {
    httpClientSpy.get.and.returnValue(of(expectedResponseAll));

    charactersService
      .fetchCharacters()
      .subscribe(heroes => expect(heroes).toEqual(expectedResponseAll, 'expected characters'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return Jon Snow', () => {
    httpClientSpy.get.and.returnValue(of(expectedResponse));

    charactersService
      .fetchCharacters(1, 'Jon Snow')
      .subscribe(heroe => expect(heroe).toEqual(expectedResponse, 'expected character'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
