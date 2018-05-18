import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../shared';
import {PosteService} from "../manager-follow-up/poste.service";

@Component({
    selector: 'jhi-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: [
        'workflow.css'
    ]
})
export class WorkflowComponent implements OnInit, OnDestroy {

    candidatures : any;
    settingsAccount: any;

    constructor(
        private posteService: PosteService,
        private principal: Principal,
    ) {

    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.settingsAccount = this.copyAccount(account);
        });
        this.posteService.getAllByManager().subscribe(data => {

            this.posteService.getAllCandidatureByCandidatId(1).subscribe(data => {
                this.candidatures = data;
                console.log(data)
            });
            console.log(data)
        });

    }

    ngOnDestroy(): void {
    }

    copyAccount(account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }

    setMyClasses(index){

    }

}
