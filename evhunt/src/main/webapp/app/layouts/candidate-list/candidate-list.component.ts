import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../shared';
import {PosteService} from "../manager-follow-up/poste.service";
import {CandidateService} from "./candidate.service";


@Component({
    selector: 'jhi-candidate-list',
    templateUrl: './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit, OnDestroy {

    candidates : Array<any>;

    constructor(
        private candidateService: CandidateService,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.candidateService.getAll().subscribe(data => {
            this.candidates = data;
        });
    }

    ngOnDestroy() {

    }

    viewCandidate(event: Event, candidate: any) {
        alert("click");
        alert(candidate.id);
        event.preventDefault();

    }




}
