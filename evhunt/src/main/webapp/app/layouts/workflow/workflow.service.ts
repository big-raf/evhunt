import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkflowService {

    constructor(private http: HttpClient) {
    }

    getAllByManager(): Observable<any> {
        return this.http.get('//localhost:8080//findAllPostes');
    }

    getAllCandidatesByPoste(id): Observable<any> {
        return this.http.get('//localhost:8080//findCandidatureByPosteId'+"/?id="+id);
    }
}
