import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {
   MatToolbarModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatTableModule,
   MatGridListModule,
   MatCardModule,
   MatTabsModule,
   MatMenuModule,
   MatIconModule,
   MatDialogModule
 } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { DecksService } from './services/decks.service';
import { DeckIndexComponent } from './components/deck/deck-index/deck-index.component';
import { DeckCreateComponent } from './components/deck/deck-create/deck-create.component';
import { DeckDetailComponent } from './components/deck/deck-detail/deck-detail.component';
import { DeckEditComponent } from './components/deck/deck-edit/deck-edit.component';
import { DeckDeleteComponent } from './components/deck/deck-delete/deck-delete.component';
import { AuthGuard } from './guards/auth.guard';
import { GlobalApp } from './helpers/isLogged';


const routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'decks', canActivate: [AuthGuard] , children: [
      { path: '', component: DeckIndexComponent },
      { path: 'create', component: DeckCreateComponent },
      { path: 'detail/:id', component: DeckDetailComponent},
      { path: 'edit/:id', component: DeckEditComponent},
      { path: 'delete/:id', component: DeckDeleteComponent}
    ]
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 60,
      "space": -6,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#5cc45c",
      "innerStrokeColor": "#111213",
      "innerStrokeWidth": 2,
      "subtitleFontSize": "20",
      "animationDuration": 1000,
      "showSubtitle": false,
      "renderOnClick": false,
      "responsive": true
    })
  ],
  providers: [
    AuthService,
    DecksService,
    AuthGuard,
    GlobalApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
