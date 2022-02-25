import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchModule } from './input-search/input-search.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, InputSearchModule],
  exports: [InputSearchModule],
})
export class ComponentsModule {}
