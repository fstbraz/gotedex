import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Character } from '@app/shared/models/character.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GOT Characters'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GOT Characters');
  });

  it('should show no results text', () => {
    component.isLoading = false;
    component.characters = [];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const nativeElement = fixture.nativeElement;
      const title = nativeElement.querySelector('h3');
      expect(title.textContent.trim()).toBe('No results for the search criteria');
    });
  });

  it('should show cards if we have results', () => {
    component.characters = [new Character()];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const nativeElement = fixture.nativeElement;
      const cardColumns = nativeElement.querySelector('div.card-columns');
      expect(cardColumns.toBeTruthy());
    });
  });

  it('should show the loading spinner', () => {
    component.isLoading = false;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const nativeElement = fixture.nativeElement;
      const spinner = nativeElement.querySelector('span.spinner');
      expect(spinner.toBe(true));
    });
  });
});
