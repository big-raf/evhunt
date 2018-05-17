import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';

import {offersRoute} from "./offers.route";
import {OffersComponent} from "./offers.component";

@NgModule({
    imports: [
        PanelModule,
        BrowserAnimationsModule,
        DataViewModule,
        RouterModule.forRoot([ offersRoute ], { useHash: true })
    ],
    declarations: [
        OffersComponent,
    ],
    entryComponents: [
    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffersModule {}
