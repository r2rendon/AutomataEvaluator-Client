import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component'
import { CommonModule } from '@angular/common';
import { Dashboard } from './Dashboard/dashboard.component';
import { CreateAutomataComponent } from './Automatas/Create/create-automata.component';
import { DFA_Component } from './Automatas/DFA/dfa.component';
import { ENFA_Component } from './Automatas/ENFA/enfa.component';
import { REGEX_Component } from './Automatas/REGEX/regex.component';
import { AutomataService } from './Automatas/Services/automata.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Dashboard,
    CreateAutomataComponent,
    DFA_Component,
    ENFA_Component,
    REGEX_Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AutomataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
