import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResumeModule{
    firstame: string;
    lastname: string;
    email: string;
    phone: string;
    experience: number;
}
