import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './Dashboard/dashboard.component';
import { DFA_Component } from './Automatas/DFA/dfa.component'
import { ENFA_Component } from './Automatas/ENFA/enfa.component'
import { REGEX_Component } from './Automatas/REGEX/regex.component'
import { CreateAutomataComponent } from './Automatas/Create/create-automata.component'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from './Automatas/DFA/Detail/detail.component';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'automata/dfa', component: DFA_Component},
  { path: 'automata/detail/:id', component: DetailComponent},
  { path: 'automata/enfa', component: ENFA_Component},
  { path: 'automata/regex', component: REGEX_Component},
  { path: 'automata/create', component: CreateAutomataComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
