import { Routes } from '@angular/router';

import {
    candidatureSubmittedRoute,
    workflowRoute,
    infosRoute,
    offersRoute
} from './';

const LAYOUTS_ROUTES = [
    candidatureSubmittedRoute,
    infosRoute,
    offersRoute
];

export const layoutsState: Routes = [{
    path: '',
    children: LAYOUTS_ROUTES
}];
