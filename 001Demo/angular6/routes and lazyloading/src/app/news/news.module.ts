import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingsModule} from './news-routings.module';

import {NewsComponent} from './news.component';

@NgModule({
  imports:[
    CommonModule,
    NewsRoutingsModule
  ],
  declarations:[
    NewsComponent,
  ],
  exports:[
    NewsComponent,
  ]
})
export class NewsModule {
}
