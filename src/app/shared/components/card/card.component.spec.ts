import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display values', () => {
    component.aliases = ['Lord Snow', 'Ned Stark´s Bastard'];
    component.born = 'In 283 AC';
    component.culture = 'Northmen';
    component.died = 'In 350 AC';
    component.gender = 'Male';
    component.name = 'Jon Snow';

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const nativeElement = fixture.nativeElement;
      const properties = nativeElement.querySelectorAll('p');
      const aliases = nativeElement.querySelectorAll('li');

      expect(properties[0].textContent.trim()).toBe('Gender : ' + component.gender);
      expect(properties[1].textContent.trim()).toBe('Culture : ' + component.culture);
      expect(properties[2].textContent.trim()).toBe('Born : ' + component.born);
      expect(properties[3].textContent.trim()).toBe('Died : ' + component.died);

      expect(aliases[0].textContent.trim()).toBe(component.aliases[0]);
      expect(aliases[1].textContent.trim()).toBe(component.aliases[1]);
    });
  });
});
