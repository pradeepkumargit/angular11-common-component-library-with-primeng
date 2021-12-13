import { NgModule } from '@angular/core';
import { PksratifyComponent } from './pksratify.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    PksratifyComponent, 
    ShowProductDetailsComponent
  ],
  imports: [
    ButtonModule,
    DropdownModule
  ],
  exports: [
    PksratifyComponent,
    ShowProductDetailsComponent
  ]
})
export class PksratifyModule { }
