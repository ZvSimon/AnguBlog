import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];
