import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/home/accueil.component';
import { DetailComponent } from './components/detail/detail.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';
import { RegisterComponent } from './components/register/register.component';
import { AddpersonComponent } from './components/add-person/add-person.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: AccueilComponent},
  { path: 'movie/:id', component: DetailComponent},
  { path: '404', component: Page404Component},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'add-Movie', component: AddMovieComponent},
  { path: 'update-Movie/:id', component: UpdateMovieComponent},
  { path: 'detail-person/:id', component:PersonComponent},
  { path: 'person', component: PersonComponent},
  { path: 'add-person', component: AddpersonComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
