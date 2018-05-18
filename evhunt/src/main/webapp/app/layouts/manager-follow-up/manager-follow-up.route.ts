import {Route} from "@angular/router";
import {ManagerFupComponent} from "./manager-follow-up.component";

export const managerFupRoute: Route =
    {
        path: 'manager-fup',
        component: ManagerFupComponent,
        data: {
            /*authorities: ['ROLE_MANAGER'],*/
            pageTitle: 'Suivi des candidats'
        },
    };
