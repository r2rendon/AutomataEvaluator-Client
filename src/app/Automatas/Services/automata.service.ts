import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class AutomataService {

    api = 'http://127.0.0.1:5000/'
    path_on_cloud = "automataImages/"

    constructor(private http: HttpClient, private storage: AngularFireStorage){}

    getAutomataByType(type){
        return this.http.get(this.api+`automatas/${type}`)
    }

    createAutomata(newAutomata){
        let options = {
            headers: new HttpHeaders({ "Content-Type": "application/json" })
        };
        if(newAutomata.automataType == 'dfa'){
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
                "type": newAutomata.automataType,
                "name": newAutomata.automataName,
                "alphabet": alphabet,
                "states": states,
                "initial_state": newAutomata.automataInitialState,
                "accepting_states": acceptingStates,
                "transitions": transitions
            }
            return this.http.post(this.api+'automata', automataObj, options);
        }
    }

}