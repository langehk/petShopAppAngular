import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OwnerDetailsComponent } from './owners/owner-details/owner-details.component';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule, ButtonsModule, ProgressbarModule} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TodoItemService} from './_services/todoitem.service';
import {AuthenticationService} from './_services/authentication.service';
import {AuthGuard} from './_guards/auth.guard';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersListComponent,
    NavbarComponent,
    WelcomeComponent,
    OwnerDetailsComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    LoginComponent,
    HomeComponent,
    PetAddComponent,
    PetDetailsComponent,
    PetUpdateComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    TodoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
