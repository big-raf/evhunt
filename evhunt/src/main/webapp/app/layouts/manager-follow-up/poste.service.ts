import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PosteService {

    constructor(private http: HttpClient) {
    }

    getAllByManager(): Observable<any> {
        return this.http.get('//localhost:8080//findAllPostes');
    }

    getAllCandidaturesByPoste(id): Observable<any> {
        return this.http.get('//localhost:8080//findCandidatureByPosteId'+"/?id="+id);
    }

    getAllCandidatureByCandidatId(id): Observable<any> {
        return this.http.get('//localhost:8080//findCandidatureByCandidatId'+"/?id="+id);
    }
}
