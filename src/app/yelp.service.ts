import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';

@Injectable()
export class YelpService {
  yelpAccessToken = "2Zpt-BoHdL-XOPH12z47CG2v-xtQytuKVA8qZJfONBtcT0hCjlTInu_tjylY6i4tYLENhc80wlI56TV9sUdoauGy6NnQ074S0x8whwNovCH1ANvbM0rW7LW99UN5WXYx";
  constructor(private _http: Http) { }

  doGetWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    headers.append( 'Authorization', ( "Bearer 2Zpt-BoHdL-XOPH12z47CG2v-xtQytuKVA8qZJfONBtcT0hCjlTInu_tjylY6i4tYLENhc80wlI56TV9sUdoauGy6NnQ074S0x8whwNovCH1ANvbM0rW7LW99UN5WXYx") );
    let opts = new RequestOptions();
    opts.headers = headers;
    this._http.get("https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972", opts)
      .toPromise()
      .then( res => console.log(res.json()));
  }
}
