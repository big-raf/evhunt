import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    errorRoute,
    navbarRoute,
    candidatureSubmittedRoute,
    workflowRoute,
    managerFupRoute,
    resumeRoute
} from './layouts';
import { DEBUG_INFO_ENABLED } from './app.constants';
import {candidateListRoute} from "./layouts/candidate-list/candidate-list.route";

const LAYOUT_ROUTES = [
    navbarRoute,
    candidatureSubmittedRoute,
    workflowRoute,
    managerFupRoute,
    resumeRoute,
    candidateListRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class EvhuntAppRoutingModule {}
