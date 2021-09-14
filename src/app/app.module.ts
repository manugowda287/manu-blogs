import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

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
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessCardComponent,
    LabelsComponent,
    SocialPluginsComponent,
    PopularPostsComponent,
    SubscribeUsComponent,
    TechnologyPostsComponent,
    MusicPostsComponent,
    FooterComponent,
    NavbarComponent,
    HotNewsComponent,
    PhotographPostsComponent,
    FoodPostsComponent,
    NaturePostsComponent,
    RecentsPostsComponent,
    AboutUsComponent,
    ContactUsComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
