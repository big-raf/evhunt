import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../shared';

@Component({
    selector: 'jhi-workflow',
    templateUrl: './workflow.component.html'
})
export class WorkflowComponent implements OnInit, OnDestroy {

    candidatures : any;
    constructor(

    ) {

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
    }


}
