import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
