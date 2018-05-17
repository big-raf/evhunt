import { Route } from '@angular/router';
import {CandidatureSubmittedComponent} from "./candidature-submitted.component";


export const candidatureSubmittedRoute: Route = {
        path: 'candidate',
        component: CandidatureSubmittedComponent,
        data: {
            authorities: [],
            pageTitle: 'Informations Personnelles'
        }
};
