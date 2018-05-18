import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {PanelModule} from 'primeng/panel';

import {infosRoute} from "./infos.route";
import {InfosComponent} from "./infos.component";

import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';

@NgModule({
    imports: [
        PanelModule,
        BrowserAnimationsModule,
        FieldsetModule,
        ButtonModule,
        RouterModule.forRoot([ infosRoute ], { useHash: true })
    ],
    declarations: [
        InfosComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfoModule {}
