import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './Dashboard/dashboard.component';
import { DFA_Component } from './Automatas/DFA/dfa.component'
import { ENFA_Component } from './Automatas/ENFA/enfa.component'
import { REGEX_Component } from './Automatas/REGEX/regex.component'

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'automata/dfa', component: DFA_Component},
  { path: 'automata/enfa', component: ENFA_Component},
  { path: 'automata/regex', component: REGEX_Component},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
