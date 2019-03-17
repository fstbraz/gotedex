import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'GOT Characters'`, () => {
    const nativeElement = fixture.nativeElement;
    const title = nativeElement.querySelector('.title');

    expect(title.textContent.trim()).toBe('GOT Characters');
  });

  it('should emit on change', () => {
    spyOn(component.searchTermChange, 'emit');

    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');

    input.value = 'something';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.searchTermChange.emit).toHaveBeenCalledWith('something');
    });
  });
});
