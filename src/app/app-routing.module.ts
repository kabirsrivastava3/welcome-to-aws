import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';
import { ReInventsComponent } from './pages/re-invents/re-invents.component';

const routes: Routes = [
  {
    path: 'my-articles',
    component: MyArticlesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 're-invents',
    component: ReInventsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {path: '**', redirectTo: '/home'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
