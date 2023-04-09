import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarFoneComponent } from './navbar-fone/navbar-fone.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BloggylogoComponent } from './bloggylogo/bloggylogo.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';

import { FormsModule } from '@angular/forms';
import { InsertbloggComponent } from './insertblogg/insertblogg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ProfileComponent,
    BlogComponent,
    NavbarFoneComponent,
    LoginComponent,
    BloggylogoComponent,
    CopyrightComponent,
    CreateaccountComponent,

    DisplayBlogComponent,

    DisplayBlogComponent,
      InsertbloggComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
