import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule, InfiniteScrollModule, ClarityModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, CardComponent, InfiniteScrollModule]
})
export class ComponentsModule {}
