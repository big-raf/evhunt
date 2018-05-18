import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import {CandidateService} from "../candidate-list/candidate.service";



@Component({
    selector: 'jhi-resume',
    templateUrl: './resume.component.html',
    styleUrls: [
        'resume.css'
    ]
})
export class ResumeComponent implements OnInit, OnDestroy {

    resume : any;
    private sub: any;
    private id : any;
    mailto:string;


    constructor(
        private candidateService: CandidateService,
        private route: ActivatedRoute,
    ) {

    }

    ngOnInit() {
        alert("test");
        console.log(this.resume);
        console.log(this.id);
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.resume = this.candidateService.getCandiateById(this.id);
            console.log("************");
            console.log(this.resume);
            console.log("************");
            console.log(this.id);
            this.candidateService.getCandiateById(this.id).subscribe(data => {
                this.resume = data;
                this.mailto = this.resume.mail;
            });


            // In a real app: dispatch action to load the details here.
        });

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }


}
