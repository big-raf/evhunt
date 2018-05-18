import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE, Principal, User, UserService } from '../../shared';
import {PosteService} from "./poste.service";
import {CandidateService} from "../candidate-list/candidate.service";


@Component({
    selector: 'jhi-manager-fup',
    templateUrl: './manager-follow-up.component.html'
})
export class ManagerFupComponent implements OnInit, OnDestroy {

    postes: Array<any>;
    candidates : Array<any>;

    constructor(
        private posteService: PosteService,
        private router: Router,
        private candidateService : CandidateService,
    ) {

    }

    ngOnInit() {
        this.posteService.getAllByManager().subscribe(data => {
            this.postes = data;
            this.postes[0].first = true;
            this.candidateService.getListByPostId(this.postes[0].id).subscribe(data => {
                this.candidates = data;
this.candidates.forEach((obj,index)=>{
    this.candidateService.getAvisRhByCandidate(obj.id).subscribe(data=>{
        obj.avisRh=data;
    });
})
            });
            console.log(data)
        });
    }

    ngOnDestroy() {

    }

    viewCandidate(event: Event, candidate: any) {
        alert("click");
        alert(candidate.id);
        event.preventDefault();

    }
    onTabOpen(e) {
        this.candidateService.getAll().subscribe(data => {
            this.candidates = data;
            console.log(data)
        });

        this.candidateService.getListByPostId(this.postes[e.index].id).subscribe(data => {
            this.candidates = data;
            this.candidates.forEach((obj,index)=>{
                this.candidateService.getAvisRhByCandidate(obj.id).subscribe(data=>{
                    obj.avisRh=data;
                });
            })

        });
    }



}
