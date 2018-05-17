import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EvhuntSharedModule } from '../shared';
import {HttpClientModule} from '@angular/common/http';

import {

    layoutsState
} from './';
import { OffersComponent } from './offers/offers.component';
import {OfferService} from "./offers/offer.service";

@NgModule({
    imports: [
        EvhuntSharedModule,
        HttpClientModule,
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
