import {Route} from "@angular/router";
import {ResumeComponent} from "./resume.component";

export const resumeRoute: Route =
    {
        path: 'resume/:id',
        component: ResumeComponent,
        data: {
            authorities: [],
            pageTitle: 'Consultation de CV'
        },
    };
