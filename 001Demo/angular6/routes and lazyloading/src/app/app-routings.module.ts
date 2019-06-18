import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


/*  使用懒加载后 删除
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {CommentsComponent} from './comments/comments.component';
*/
const appRoutes: Routes=[
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:'./home/home.module#HomeModule'
    /*
    path:'home',    //使用懒加载后 进行更改
    component:HomeComponent
    */
  },
  {
    path:'',
    loadChildren:'./news/news.module#NewsModule'
    /*
    path:'news', //使用懒加载后 进行更改
    component:NewsComponent
    */
  },
  {
    path:'',
    loadChildren:'./comments/comments.module#CommentsModule'
    /*
    path:'comments',  //使用懒加载后 进行更改
    component:CommentsComponent
    */
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingsModule{
}
