import { Component, OnInit } from '@angular/core';
import {ResumeModule} from "../../entities/resume.module";
import {OfferService} from "../offers/offer.service";

@Component({
  selector: 'jhi-candidature-submitted',
  templateUrl: './candidature-submitted.component.html',
  styles: []
})
export class CandidatureSubmittedComponent implements OnInit {
    offers: any[];
  constructor(private offerService: OfferService) { }

  ngOnInit() {
      this.offerService.getOfferList().subscribe(data => {
          this.offers = data;
          console.log(data)
      });
  }

}
