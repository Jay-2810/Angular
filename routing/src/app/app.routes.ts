import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'',component:Home},
    {path:'**',component:PageNotFound}
];
