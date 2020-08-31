import { Component, OnInit } from '@angular/core'
import { AutomataService } from '../../Services/automata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
    automata: any
    transitionKeys: any

    constructor(private service: AutomataService, private route: ActivatedRoute){}

    ngOnInit() {
        const id = this.route.snapshot.params['id']
        this.service.getAutomataByID(id).subscribe(data => {
            this.automata = data
            this.transitionKeys = Object.keys(this.automata.transitions)
        })
    }
}