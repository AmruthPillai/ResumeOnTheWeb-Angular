import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    TooltipModule,
    TabsModule,
  ]
})
export class BootstrapModule { }
