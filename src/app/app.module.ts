import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {
<<<<<<< HEAD
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';
=======
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
>>>>>>> 760f4b3d9332580df984be9d786a95c8e4d8153f

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
import { CardsService } from './services/cards.service';
import { CardIndexComponent } from './components/card/card-index/card-index.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CardEditComponent } from './components/card/card-edit/card-edit.component';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';


const routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'decks', canActivate: [AuthGuard], children: [
      { path: '', component: DeckIndexComponent },
      { path: 'create', component: DeckCreateComponent },
      { path: 'detail/:id', component: DeckDetailComponent },
      { path: 'edit/:id', component: DeckEditComponent },
      { path: 'delete/:id', component: DeckDeleteComponent }
    ]
  },
  {
    path: 'cards', canActivate: [AuthGuard], children: [
      { path: '', component: CardIndexComponent },
      { path: 'create', component: CardCreateComponent },
      { path: 'detail/:id', component: CardDetailComponent },
      { path: 'edit/:id', component: CardEditComponent },
      { path: 'delete/:id', component: CardDeleteComponent }
    ]
  },
]
  ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DeckIndexComponent,
    DeckCreateComponent,
    DeckDetailComponent,
    DeckEditComponent,
    DeckDeleteComponent,
    CardIndexComponent,
    CardCreateComponent,
    CardDetailComponent,
    CardEditComponent,
    CardDeleteComponent
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
    CardsService,
    AuthGuard,
    GlobalApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
