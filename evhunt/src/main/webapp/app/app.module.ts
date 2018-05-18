import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { EvhuntSharedModule, UserRouteAccessService } from './shared';
import { EvhuntAppRoutingModule} from './app-routing.module';
import { EvhuntHomeModule } from './home/home.module';
import { EvhuntAdminModule } from './admin/admin.module';
import { EvhuntAccountModule } from './account/account.module';
import { EvhuntEntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';



// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent,
    WorkflowComponent, ResumeComponent, CandidateListComponent
} from './layouts';
import { InfosComponent } from './layouts/infos/infos.component';
import { CandidatureSubmittedComponent } from './layouts/candidature-submitted/candidature-submitted.component';
import {EvhuntLayoutsModule} from "./layouts/layouts.module";
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {ManagerFupComponent} from "./layouts/manager-follow-up/manager-follow-up.component";
import {PosteService} from "./layouts/manager-follow-up/poste.service";
import {CandidateService} from "./layouts/candidate-list/candidate.service";

@NgModule({
    imports: [
        BrowserModule,
        EvhuntAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EvhuntSharedModule,
        EvhuntHomeModule,
        EvhuntAdminModule,
        EvhuntAccountModule,
        EvhuntEntityModule,
        EvhuntLayoutsModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        BrowserAnimationsModule,
        ButtonModule,
        PanelModule,
        DataViewModule,
        DropdownModule,
        FieldsetModule,
        FormsModule,
        AccordionModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        InfosComponent,
        CandidatureSubmittedComponent,
        WorkflowComponent,
        ManagerFupComponent,
        ResumeComponent,
        CandidateListComponent
    ],
    providers: [
        ProfileService,
        PosteService,
        CandidateService,
        PaginationConfig,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [
                LocalStorageService,
                SessionStorageService
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [
                JhiEventManager
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        }
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EvhuntAppModule {}
