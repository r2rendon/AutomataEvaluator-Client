import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms'
import { AutomataService } from '../Services/automata.service'
import { Router } from '@angular/router'

@Component({
    selector: 'create-automata',
    templateUrl: './create-automata.component.html'
})

export class CreateAutomataComponent implements OnInit {
    // Form Group
    automataForm: FormGroup
    // From Control
    automataName: FormControl
    automataType: FormControl
    automataAlphabet: FormControl
    automataStates: FormControl
    automataInitialState: FormControl
    automataAcceptingStates: FormControl
    automataTransitions: FormControl

    constructor(private service: AutomataService, private router: Router){
    }

    ngOnInit(){
        this.automataName = new FormControl('', [Validators.required])
        this.automataType = new FormControl(null, [Validators.required])
        this.automataAlphabet = new FormControl('', [Validators.required])
        this.automataStates = new FormControl('', [Validators.required])
        this.automataInitialState = new FormControl('', [Validators.required])
        this.automataAcceptingStates = new FormControl('', [Validators.required])
        this.automataTransitions = new FormControl('', [Validators.required])

        this.automataForm = new FormGroup({
            automataName: this.automataName,
            automataType: this.automataType,
            automataAlphabet: this.automataAlphabet,
            automataStates: this.automataStates,
            automataInitialState: this.automataInitialState,
            automataAcceptingStates: this.automataAcceptingStates,
            automataTransitions: this.automataTransitions
        })
        
    }

    submitAutomata(formValues){
        console.log(formValues)
        this.service.createAutomata(formValues).subscribe(data => {
            this.router.navigate(['/automata/dfa'])
        })
    }
}
