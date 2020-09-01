import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html' 
})
export class Dashboard implements OnInit {
  items: any

  constructor(private router: Router) {
    this.items = automatasArray
  }

  ngOnInit() {}

  goToCreateAutomata(){
    this.router.navigate(['/automata/create'])
  }

  goToAutomataPage(title){
    if (title == "DFA")
      this.router.navigate(['/automata/dfa'])
    else if (title == "ENFA")
      this.router.navigate(['/automata/enfa'])
    else if (title == "Regular Expression")
      this.router.navigate(['/automata/regex'])
  }

}

const automatasArray = [
  {
    title: "DFA",
    content: "Deterministic Finite Automata",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DFAexample.svg/300px-DFAexample.svg.png"
  },
  {
    title: "ENFA",
    content: "Epsilon Non-Deterministic Automata",
    img: "https://i.stack.imgur.com/aqvXI.png"
  },
  {
    title: "Regular Expression",
    content: "Regular Expression",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--BkTlhG-K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/ekFpQUg.png"
  }
]
