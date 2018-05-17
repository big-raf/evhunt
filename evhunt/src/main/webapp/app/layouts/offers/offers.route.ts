import { Route } from '@angular/router';
import {OffersComponent} from "./offers.component";
import {UserRouteAccessService} from "../../shared";

export const offersRoute: Route = {
    path: 'offers',
    component: OffersComponent,
    data: {
        authorities: [],
        pageTitle: 'Listes des postes'
    },
    canActivate: [UserRouteAccessService]
};


