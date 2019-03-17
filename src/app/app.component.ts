import { Component } from '@angular/core';
import { CharactersService } from '@app/shared/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GOT Characters';
  pageNumber = 1;
  characters = [];
  isLoading: boolean;
  searchedCharacter: string;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
  }

  scrollDown() {
    this.pageNumber++;
    this.getCharacters(this.pageNumber, this.searchedCharacter ? this.searchCharacter : undefined);
  }

  searchCharacter(name) {
    this.characters = [];
    this.searchedCharacter = name;
    this.getCharacters(1, name);
  }

  getCharacters(pageNumber = 1, name?) {
    this.isLoading = true;
    this.charactersService.fetchCharacters(pageNumber, name).subscribe(
      data => {
        this.isLoading = false;
        this.characters = this.characters.concat(
          data.filter(data => {
            if (data.name.length > 0) {
              const urlSplit = data.url.split('/');
              return {
                ...data,
                id: Number(urlSplit[urlSplit.length - 1])
              };
            }
          })
        );
      },
      err => console.error(err)
    );
  }
}
