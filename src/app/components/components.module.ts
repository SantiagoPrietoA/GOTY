import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphsComponent } from './graphs/graphs.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    NavbarComponent,
    GraphsComponent
    ],
  exports: [
    NavbarComponent,
    GraphsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
