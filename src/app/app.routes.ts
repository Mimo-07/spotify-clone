import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: SpotifyComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
