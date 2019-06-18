import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsRoutingsModule} from './comments-routings.module';

import {CommentsComponent} from './comments.component';

@NgModule({
  imports:[
    CommonModule,
    CommentsRoutingsModule
  ],
  declarations:[
    CommentsComponent
  ],
  exports:[
    CommentsComponent
  ]
})
export class CommentsModule {
}
