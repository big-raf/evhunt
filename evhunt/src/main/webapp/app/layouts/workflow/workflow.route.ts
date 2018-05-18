import {Route} from "@angular/router";
import {WorkflowComponent} from "./workflow.component";

export const workflowRoute: Route =
    {
        path: 'workflow',
        component: WorkflowComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
    };
