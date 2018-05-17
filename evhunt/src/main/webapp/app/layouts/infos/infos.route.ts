import { Route } from '@angular/router';
import {InfosComponent} from "./infos.component";
import {UserRouteAccessService} from "../../shared";

export const infosRoute: Route = {
        path: 'infos',
        component: InfosComponent,
        data: {
            authorities: [],
            pageTitle: 'Informations Personnelles'
        }
};
