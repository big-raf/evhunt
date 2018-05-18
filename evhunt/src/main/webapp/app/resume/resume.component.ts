import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';



@Component({
    selector: 'jhi-resume',
    templateUrl: './workflow.component.html',
    styleUrls: [
        'resume.css'
    ]
})
export class ResumeComponent implements OnInit, OnDestroy {

    resume : any;

    constructor(

    ) {

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
    }


}
