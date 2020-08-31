import { Component, OnInit } from '@angular/core'
import { AutomataService } from '../Services/automata.service'
import { Router } from '@angular/router'

@Component({
    selector: 'enfa',
    templateUrl: './enfa.component.html'
})

export class ENFA_Component implements OnInit {
    automatas: any

    constructor(private service: AutomataService, private router: Router){

    }

    ngOnInit(){
        this.service.getAutomataByType('enfa').subscribe((data: Array<any>) => {
            this.automatas = data
        })
    }

    goToAutomata(id){
        this.router.navigate([`/automata/detail/${id}`])
    }
}
