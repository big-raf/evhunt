import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {errorRoute, navbarRoute, candidatureSubmittedRoute, workflowRoute, managerFupRoute} from './layouts';
import { DEBUG_INFO_ENABLED } from './app.constants';

const LAYOUT_ROUTES = [
    navbarRoute,
    candidatureSubmittedRoute,
    workflowRoute,
    managerFupRoute,
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
