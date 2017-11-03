import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

@Injectable()
export class YelpService {

  constructor(private _http: Http) { }

  getRestaurants(search) {
    return this._http.post('/api/yelpCall', search)
      .map( data => data.json())
      .toPromise();
  }
}
