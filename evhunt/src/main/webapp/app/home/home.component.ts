import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
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

    constructor(private  router: Router) {
    }

    ngOnInit() {
    }

    save(){
        this.router.navigateByUrl('/');
        if (this.linkedinURL != null){
            this.router.navigateByUrl('/candidate');
        } else {
            this.router.navigateByUrl('/infos');
        }
    }

}
