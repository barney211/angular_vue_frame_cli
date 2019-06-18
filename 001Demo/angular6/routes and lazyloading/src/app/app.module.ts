import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingsModule} from './app-routings.module';
/*   使用懒加载后此处要删除
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';
*/
@NgModule({
  declarations: [
    AppComponent
    /*   使用懒加载后此处要删除
    HomeComponent,
    NewsComponent,
    CommentsComponent
    */
  ],
  imports: [
    BrowserModule,
    AppRoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
