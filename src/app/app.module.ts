import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
   MatToolbarModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatTableModule
 } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { DecksService } from './services/decks.service';
import { DeckIndexComponent } from './components/deck/deck-index/deck-index.component';
import { DeckCreateComponent } from './components/deck/deck-create/deck-create.component';
import { DeckDetailComponent } from './components/deck/deck-detail/deck-detail.component';
import { DeckEditComponent } from './components/deck/deck-edit/deck-edit.component';
import { DeckDeleteComponent } from './components/deck/deck-delete/deck-delete.component';


const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'decks', children: [
      { path: '', component: DeckIndexComponent },
      { path: 'create', component: DeckCreateComponent },
      { path: 'detail/:id', component: DeckDetailComponent}
    ]
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    DeckIndexComponent,
    DeckCreateComponent,
    DeckDetailComponent,
    DeckEditComponent,
    DeckDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    DecksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
