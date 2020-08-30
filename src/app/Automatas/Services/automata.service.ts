import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable()
export class AutomataService {

    constructor(private http: HttpClient){}

    createAutomata(newAutomata){
        let options = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
            responseType: "text" as "json"
        };
        if(newAutomata.type == 'dfa'){
            const alphabet = newAutomata.automataAlphabet.split(',');
            const states = newAutomata.automataStates.split(',');
            const acceptingStates = newAutomata.automataAcceptingStates.split(',');
            const transitionsSplit: Array<String> = newAutomata.automataTransitions.split(';');
            let transitions = {};
            transitionsSplit.forEach(transition => {
                const split = transition.split(',');
                transitions[`${split[0]}, ${split[1]}`] = split[2]
            });
            const automataObj = {
                "type": newAutomata.type,
                "alphabet": alphabet,
                "states": states,
                "initial_state": newAutomata.automataInitialStates,
                "accepting_states": acceptingStates,
                "transitions": transitions
            }

            return this.http.post(`http://127.0.0.1:5000/automata`, automataObj, options);

        }
    }

}