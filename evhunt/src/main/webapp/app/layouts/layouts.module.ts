import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EvhuntSharedModule } from '../shared';
import {HttpClientModule} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
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


import {

    layoutsState
} from './';
import { OffersComponent } from './offers/offers.component';
import {OfferService} from "./offers/offer.service";

@NgModule({
    imports: [
        EvhuntSharedModule,
        HttpClientModule,
        AccordionModule,
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
        PanelModule,
        RouterModule.forChild(layoutsState)
    ],
    declarations: [

    OffersComponent],
    providers: [
        OfferService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EvhuntLayoutsModule {}
