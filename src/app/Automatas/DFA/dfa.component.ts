import { Component, OnInit } from '@angular/core'
import { AutomataService } from '../Services/automata.service';
import { Router } from '@angular/router';

@Component({
    selector: 'dfa',
    templateUrl: './dfa.component.html'
})

export class DFA_Component implements OnInit {
    path_on_cloud = "automataImages/"
    automatas: Array<any>

    constructor(private service: AutomataService, private router: Router){

    }

    ngOnInit(){
        this.service.getAutomataByType('dfa').subscribe((data: Array<any>) => {
            this.automatas = data
        })
    }

    goToAutomata(id){
        this.router.navigate([`/automata/detail/${id}`])
    }

}
