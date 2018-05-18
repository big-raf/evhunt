import {Route} from "@angular/router";
import {CandidateListComponent} from "./candidate-list.component";

export const candidateListRoute: Route =
    {
        path: 'candidates',
        component: CandidateListComponent,
        data: {
            /*authorities: ['ROLE_MANAGER'],*/
            pageTitle: 'Suivi des candidats'
        },
    };
