import { Component, OnInit } from '@angular/core';
import {ResumeModule} from "../../entities/resume.module";

@Component({
  selector: 'jhi-candidature-submitted',
  templateUrl: './candidature-submitted.component.html',
  styles: []
})
export class CandidatureSubmittedComponent implements OnInit {
    resume: ResumeModule;
  constructor() { }

  ngOnInit() {
  }

}
