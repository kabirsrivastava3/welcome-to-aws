import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReInventsComponent } from './pages/re-invents/re-invents.component';
import { NavigationComponent } from './shared-components/navigation/navigation.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    MyArticlesComponent,
    HomeComponent,
    AboutUsComponent,
    ReInventsComponent,
    NavigationComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
