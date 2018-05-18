import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/primeng";
import {DialogModule} from "primeng/primeng";
import {DropdownModule} from "primeng/primeng";
import {TabViewModule} from "primeng/primeng";
import {CodeHighlighterModule} from "primeng/primeng";

import {offersRoute} from "./offers.route";
import {OffersComponent} from "./offers.component";
import {OfferService} from "./offer.service";

@NgModule({
    imports: [
        PanelModule,
        BrowserAnimationsModule,
        DataViewModule,
        FieldsetModule,
        ButtonModule,
        CommonModule,
        FormsModule,
        InputTextModule,
        DialogModule,
        DropdownModule,
        TabViewModule,
        CodeHighlighterModule,
        RouterModule.forRoot([ offersRoute ], { useHash: true })
    ],
    declarations: [
        OffersComponent
    ],
    entryComponents: [
    ],
    providers: [
        OfferService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffersModule {}
