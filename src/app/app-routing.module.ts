import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {CommonModule} from '@angular/common';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';

const routes: Routes = [
  {path: 'owners/:ownerId', component: OwnerDetailsComponent},
  {path: 'owner-update/:ownerId', component: OwnerUpdateComponent},
  {path: 'owners-add', component: OwnerAddComponent},
  {path: 'owners', component: OwnersListComponent},
  {path: '', component: WelcomeComponent}

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
