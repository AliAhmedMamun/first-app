import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';
import { CSixComponent } from './c-six/c-six.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [COneComponent, CTwoComponent, CSixComponent]
})
export class MOneModule { }
