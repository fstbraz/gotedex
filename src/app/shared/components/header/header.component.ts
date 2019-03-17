import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchTermChange: EventEmitter<string> = new EventEmitter();
  findControl = new FormControl();

  ngOnInit() {
    this.findControl.valueChanges.subscribe(term => {
      this.searchTermChange.emit(term);
    });
  }
}
