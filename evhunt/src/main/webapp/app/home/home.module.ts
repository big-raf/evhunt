import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EvhuntSharedModule } from '../shared';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FileUploadModule} from 'primeng/fileupload';
import {PanelModule} from 'primeng/panel';

import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
    imports: [
        EvhuntSharedModule,
        FileUploadModule,
        PanelModule,
        BrowserAnimationsModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvhuntHomeModule {}
