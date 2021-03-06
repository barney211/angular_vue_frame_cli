import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {CommentsComponent} from './comments.component';

export const routes: Routes=[
  {
    path:'comments',
    component:CommentsComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CommentsRoutingsModule {
}
