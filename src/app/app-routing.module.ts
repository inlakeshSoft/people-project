import { NgModule } from '@angular/core';import { RouterModule, Routes } from '@angular/router';
import { PeopleTableComponent } from './components/people/people-table/people-table.component';

const routes: Routes = [
  {path:'people', component: PeopleTableComponent},
  {path: '**', pathMatch:'full', redirectTo:'people'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
