import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class LocationService {
  constructor(private _http: Http) { }

  getCoordinates() {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition( function (position) {
        resolve(position);
        reject();
      }, () => {
      // show popup
      }, {enableHighAccuracy: true});
    });
  }
}
