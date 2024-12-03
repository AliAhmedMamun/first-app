import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CThreeComponent } from './c-three/c-three.component';
import { CFourComponent } from './c-four/c-four.component';
import { CFiveComponent } from './c-five/c-five.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CThreeComponent, CFourComponent, CFiveComponent]
})
export class MTwoModule { }
