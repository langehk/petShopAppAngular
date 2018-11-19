import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {CommonModule} from '@angular/common';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import {PetListComponent} from './pets/pet-list/pet-list.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import {PetDetailsComponent} from './pets/pet-details/pet-details.component';

const routes: Routes = [
  {path: 'owners/:ownerId', component: OwnerDetailsComponent},
  {path: 'owner-update/:ownerId', component: OwnerUpdateComponent},
  {path: 'owners-add', component: OwnerAddComponent},
  {path: 'owners', component: OwnersListComponent},
  {path: '', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: PetListComponent},
  {path: 'pet-add', component: PetAddComponent},
  {path: 'pet-update/:petId', component: PetUpdateComponent},
  {path: 'pets/:petId', component: PetDetailsComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
