import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedListComponent } from './components/dogs/breed-list/breed-list.component';
import { DogDetailComponent } from './components/dogs/dog-detail/dog-detail.component';


const routes: Routes = [
  { path: '', component: BreedListComponent },
  { path: 'images/:breed', component: DogDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
