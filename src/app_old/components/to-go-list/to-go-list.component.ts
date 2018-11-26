import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransformDataService} from '../../services/transform-data.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-to-go-list',
  templateUrl: './to-go-list.component.html',
  styleUrls: ['./to-go-list.component.css']
})
export class ToGoListComponent implements OnInit, OnDestroy {
  searchPlace: '';
  subscriptionPlace: Subscription;
  places: object[] = [];

  constructor(public transformDataService: TransformDataService) { }

  ngOnInit() {
    this.subscriptionPlace = this.transformDataService.dataPlaces.subscribe((data) => {
      this.places = data;
    });
  }


  ngOnDestroy() {
    this.subscriptionPlace.unsubscribe();
  }

  remove(placeName) {
    this.places.forEach((val, index) => {
      if (val['label'] === placeName) {
        this.places.splice(index, 1);
      }
    });
  }

}
