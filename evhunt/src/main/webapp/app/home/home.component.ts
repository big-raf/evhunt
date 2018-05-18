import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HomeService} from "./home.service";
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
    candidat: any;

    constructor(private homeService: HomeService, private router: Router) { }

    ngOnInit() {
            this.homeService.parsePdfCV('/Users/fabuela/Downloads/cv-ba-2.pdf').subscribe(data => {
                this.candidat = data;
                console.log(data)
            });
    }

    save(){
        this.router.navigateByUrl('/');
        if (this.linkedinURL != null){
            this.router.navigateByUrl('/candidate');
        } else {
            this.router.navigateByUrl('/infos', this.candidat);
        }
    }

}
