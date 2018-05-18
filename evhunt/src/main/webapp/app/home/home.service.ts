import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) {
    }

    parsePdfCV(filePath: string): Observable<any> {
        return this.http.get('//localhost:8080//parseFile?path=' + filePath);
    }

    parseCVFile(cvFile: File) : Observable<any> {
        let formData: FormData = new FormData();
        formData.append('file', cvFile);
        let headers = {'Content-Type': '', 'Accept': 'application/json'};
        return this.http.post('/parseCVFile', formData, {headers: headers})
    }

}

