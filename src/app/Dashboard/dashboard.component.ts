import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  template: `
    <div class="container">
      <div class="jumbotron mt-3">
          <h1 class="display-4">Hi!</h1>
          <p class="lead">Welcome to this awesome app, feel free to use this app however you want!</p>
          <hr class="my-4">
          <small>So you don't have your own Automata?<a class="nav-link p-0 d-inline" (click)="goToCreateAutomata()"> Click here to create it</a></small>
      </div>

      <div class="row">
          <li *ngFor="let item of items" class="col-md-4">
              <div class="card flex-md-row mb-4 box-shadow h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                      <h3 class="mb-0">{{item.title}}</h3>
                      <div class="card-text mb-auto">{{item.content}}</div>
                      <img class="card-img-right flex-auto d-none d-md-block" src="{{item.img}}">
                  </div>
              </div>
          </li>
      </div>
    </div>
  `,
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
