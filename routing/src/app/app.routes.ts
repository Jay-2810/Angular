import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'about',component:About},
    {path:'contact',component:Contact}
];
