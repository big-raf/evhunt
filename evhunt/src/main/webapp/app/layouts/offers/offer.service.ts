import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offer} from './offer';

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) {}

  getOfferList() {
    return this.http.get<any>('./offers_file.json')
      .toPromise()
      .then(res => <Offer[]> res.data)
      .then(data => data);
  }
}
