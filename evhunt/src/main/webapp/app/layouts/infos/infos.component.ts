import { Component, OnInit } from '@angular/core';
import {ResumeModule} from "../../entities/resume.module";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../offers/offer.service";
import {InfosService} from "./infos.service";

@Component({
  selector: 'jhi-infos',
  templateUrl: './infos.component.html',
  styles: [`
      .label {
        background-color: dodgerblue;
        width: 140px;
    }

      `]
})
export class InfosComponent implements OnInit {
    candidat: any;
    status: any;

    constructor(private route: ActivatedRoute, private infosService: InfosService, private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.infosService.parsePdfCV("/Users/fabuela/Downloads/cv-ba-2.pdf").subscribe(data => {
                this.candidat = data;
                console.log(this.candidat)
            })
            }
        );
    }

    save() {
        this.infosService.storeCV(this.candidat).subscribe(data => {
            this.status = data;
            console.log(data)
            this.router.navigateByUrl('/candidate', this.status);
        });
    }
}
