import { Component, OnInit } from '@angular/core';
import {ResumeModule} from "../../entities/resume.module";

@Component({
  selector: 'jhi-infos',
  templateUrl: './infos.component.html',
  styles: []
})
export class InfosComponent implements OnInit {
    resume: ResumeModule;
    constructor() { }
    ngOnInit() {
        
    }

    save() {

    }
}
