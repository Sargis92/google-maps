import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Places} from '../components/maps-view/maps-view.component';

@Injectable()
export class TransformDataService {

  // Observable object sources
  private dataPlacesSource = new Subject<object[]>();
  private showPlaceOnMapSource = new Subject<Places[]>();

  // Observable object streams
  dataPlaces = this.dataPlacesSource.asObservable();
  datashowPlaceOnMap = this.showPlaceOnMapSource.asObservable();

  constructor() { }


  transformPlace(data: object[]) {
    this.dataPlacesSource.next(data);
  }

  showPlace(data: Places[]) {
    this.showPlaceOnMapSource.next(data);
  }

  // showPopup(show: boolean) {
  //   this.showPopupSource.next(show);
  // }

}
