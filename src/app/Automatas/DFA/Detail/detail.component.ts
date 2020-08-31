import { Component, OnInit } from '@angular/core'
import { AutomataService } from '../../Services/automata.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
    automata: any
    transitionKeys: any
    showEvaluator: Boolean
    evaluateResponse: any
    result: any
    showResponse: Boolean

    // Form Group
    evaluateForm: FormGroup
    // Form Control
    evaluation: FormControl

    constructor(private service: AutomataService, private route: ActivatedRoute){
        this.result = '';
        this.showResponse = false;
    }

    ngOnInit() {
        this.evaluation = new FormControl('', [Validators.required]);
        this.evaluateForm = new FormGroup ({
            evaluation: this.evaluation
        })

        const id = this.route.snapshot.params['id']
        this.service.getAutomataByID(id).subscribe(data => {
            this.automata = data;
            this.transitionKeys = Object.keys(this.automata.transitions);
        });
    }

    evaluate(){
        this.showEvaluator = true;
    }

    submitEvaluation(formValues){
        this.showResponse = false;
        this.service.getEvaluation(this.automata._id, this.automata.type, formValues.evaluation).subscribe(data => {
            this.result = data
            this.showResponse = true;
        })
    }

}