import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
// Firebase Modules
import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component'
import { CommonModule } from '@angular/common';
import { Dashboard } from './Dashboard/dashboard.component';
import { CreateAutomataComponent } from './Automatas/Create/create-automata.component';
import { DFA_Component } from './Automatas/DFA/dfa.component';
import { ENFA_Component } from './Automatas/ENFA/enfa.component';
import { REGEX_Component } from './Automatas/REGEX/regex.component';
import { DetailComponent } from './Automatas/DFA/Detail/detail.component'
import { AutomataService } from './Automatas/Services/automata.service'

const firebaseConfig = {
  apiKey: "AIzaSyDdKRfNx47GbMB8Wwda43I0nCqfzSrpAIE",
  authDomain: "automataproject-1d04b.firebaseapp.com",
  databaseURL: "https://automataproject-1d04b.firebaseio.com",
  projectId: "automataproject-1d04b",
  storageBucket: "automataproject-1d04b.appspot.com",
  messagingSenderId: "561854169181",
  appId: "1:561854169181:web:a094e38ce8213c3c3ccdb4",
  measurementId: "G-Z150R6RN6R"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Dashboard,
    CreateAutomataComponent,
    DFA_Component,
    ENFA_Component,
    REGEX_Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    AutomataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
