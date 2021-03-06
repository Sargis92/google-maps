import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  enterPlace: string;
  latestSubmittedVal: string;
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() placeName = new EventEmitter<string>();
  @Input() placeNameError: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  modelChanged(newVal) {
    if (newVal && this.latestSubmittedVal !== newVal) {
      this.placeNameError = false;
    } else {
      this.placeNameError = true;
    }
  }

  savePlaceName() {
    this.latestSubmittedVal = this.enterPlace;
	this.modelChanged(this.enterPlace);
    this.placeName.emit(this.enterPlace);
  }


}
