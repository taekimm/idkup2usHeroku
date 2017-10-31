import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';

@Injectable()
export class YelpService {

  constructor(private _http: Http) { }
  
  getRestaurants(search){
    return this._http.post('/api/yelpCall', search)
      .map( data => data.json())
      .toPromise();
  }
}
