import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  enterPlace: string;
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() placeName = new EventEmitter<boolean>();
  @Input() placeNameError: boolean;


  constructor() {
  }

  ngOnInit() {
    console.log(this.placeNameError);
  }


}
