import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import {ComoFuncionaComponent} from './componentes/como-funciona/como-funciona.component';
import {NosotrosComponent} from './componentes/nosotros/nosotros.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'como_funciona', component: ComoFuncionaComponent},
  { path:'nosotros' , component:NosotrosComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});