import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CandidateService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get('//localhost:8080//findAllCandidats');
    }

    getCandiateById(id): Observable<any> {
        return this.http.get('//localhost:8080//findCandidatById/?id='+id);
    }

}
