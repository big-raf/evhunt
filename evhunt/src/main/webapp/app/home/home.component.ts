import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    uploadedFile: any;
    linkedinURL: string;

    constructor() {
    }

    ngOnInit() {
    }

    save(){
        if (this.linkedinURL != null){

        } else if (this.uploadedFile != null) {
            PdfParser.getText
        }
    }

}
