import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingsModule} from './home-routings.module';

import {HomeComponent} from './home.component';


@NgModule({
  imports:[
    CommonModule,
    HomeRoutingsModule
  ],
  declarations:[
    HomeComponent
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule {
}
