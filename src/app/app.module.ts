import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { LabelsComponent } from './labels/labels.component';
import { SocialPluginsComponent } from './social-plugins/social-plugins.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { SubscribeUsComponent } from './subscribe-us/subscribe-us.component';
import { TechnologyPostsComponent } from './technology-posts/technology-posts.component';
import { MusicPostsComponent } from './music-posts/music-posts.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { PhotographPostsComponent } from './photograph-posts/photograph-posts.component';
import { FoodPostsComponent } from './food-posts/food-posts.component';
import { NaturePostsComponent } from './nature-posts/nature-posts.component';
import { RecentsPostsComponent } from './recents-posts/recents-posts.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BusinessCardComponent, LabelsComponent, SocialPluginsComponent, PopularPostsComponent, SubscribeUsComponent, TechnologyPostsComponent, MusicPostsComponent, FooterComponent, NavbarComponent, HotNewsComponent, PhotographPostsComponent, FoodPostsComponent, NaturePostsComponent, RecentsPostsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
