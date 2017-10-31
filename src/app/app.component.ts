import { Component, OnInit } from '@angular/core';

import { LocationService } from './location.service';
import { YelpService } from './yelp.service';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Yelp Search variables
  newSearch = {
    radius: .5,
    lat: 0,
    long: 0,
  }
  radiusforsearch;

  // Coordinates from location service
  coordinates;
  // Map object coming from google maps API
  map2;

  // Results from Yelp Search
  YelpList: Array<any> = [];
  businessList: Array<any> = [];
  pick;
  
  
  constructor(
    private _yelpService: YelpService,
    private _locationService: LocationService
  ) { }
  
  ngOnInit() {
    this._locationService.getCoordinates()
      .then( position => {
        
        // setting coordinates objects above to results from geolocation
        this.coordinates = position;
        // setting newSearch variable's lat & long values to co
        this.newSearch.lat = this.coordinates.coords.latitude;
        this.newSearch.long = this.coordinates.coords.longitude;

        // var map;

        //map options
        var mapOptions = {
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //generating map
        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        
        // geolocate position for 
        var positionForMarker = new google.maps.LatLng(this.coordinates.coords.latitude, this.coordinates.coords.longitude)

        var marker = new google.maps.Marker({
          map: map,
          position: positionForMarker,
          animation: google.maps.Animation.BOUNCE
        });

        map.setCenter(positionForMarker)
      })
      .catch()
  }

  search() {
    this._yelpService.doGetWithHeaders();
  }
}
