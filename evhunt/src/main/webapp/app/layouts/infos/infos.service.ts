import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InfosService {

    constructor(private http: HttpClient) {
    }

    storeCV(cv: string): Observable<any> {
        return this.http.get('//localhost:8080//storeCandidat?id_source=3&cv=' + cv);
    }

    parsePdfCV(filePath: string): Observable<any> {
        return this.http.get('//localhost:8080//parseFile?path=' + filePath);
    }
}

