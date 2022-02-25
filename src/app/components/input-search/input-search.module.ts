import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../../ng-zoro-antd-module';
@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  exports: [InputSearchComponent],
})
export class InputSearchModule {}
