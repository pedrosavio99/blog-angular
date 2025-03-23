import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentPageComponent } from './content-page/content-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: ContentPageComponent }
];