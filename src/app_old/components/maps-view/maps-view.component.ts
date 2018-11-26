import {Component, OnDestroy, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {TransformDataService} from '../../services/transform-data.service';
import {Subscription} from 'rxjs/Subscription';

export interface Places {
  lat: number;
  lng: number;
  label?: string;
}

@Component({
  selector: 'app-maps-view',
  templateUrl: './maps-view.component.html',
  styleUrls: ['./maps-view.component.css']
})
export class MapsViewComponent implements OnInit, OnDestroy {
  showPopup: boolean;
  placeNameError = false;
// google maps zoom level
  zoom: number;
  map: any;
  subscriptionPlace: Subscription;
  currentCoords;

  // initial center position for the map
  lat: number;
  lng: number;
  places: Places[] = [];
  initialPlaceName = 'Yerevan';

  constructor(private transformDataService: TransformDataService) {
    this.zoom = 8
    this.lat = 40.177200;
    this.lng = 44.503490;
  }

  ngOnInit() {

    this.subscriptionPlace = this.transformDataService.datashowPlaceOnMap.subscribe((data) => {
      const showPlaceObj = {lat: data['lat'], lng: data['lng']};
      this.map.panTo(showPlaceObj);
    });
    this.buildMarker({lat: this.lat, lng: this.lng}, this.initialPlaceName);
  }

  ngOnDestroy() {
    this.subscriptionPlace.unsubscribe();
  }

  mapReady(map) {
    this.map = map;
  }

  buildMarker(coords, placeName) {
    const place = coords;
    place.label = placeName;
    this.places.push(place);
    this.transformDataService.transformPlace(this.places);

  }

  receiveMessagePopup($event) {
    this.showPopup = $event;
  }

  checkPlaceNameIsExist(name): boolean {
    for (const item of this.places) {
      if (item.label.toLowerCase() === name.toLowerCase().trim()) {
        return true;
      }
    }
    return false;
  }

  receivePlaceName(placeName) {
    if (!this.checkPlaceNameIsExist(placeName.trim())) {
      this.buildMarker(this.currentCoords, placeName.trim());
      this.showPopup = false;
    } else {
     this.placeNameError = true;
    }


  }

  mapClicked($event: MouseEvent) {
    this.showPopup = true
    this.placeNameError = false;
    this.currentCoords = $event.coords;
  }

}
